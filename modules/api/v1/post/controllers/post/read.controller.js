'use strict';

var Post = require('../../models/post.model');
var Connection = require('../../../connections/models/connection.model');
var User = require('../../../auth/models/user.model');
var Id = require('../../../connections/controllers/connection/id.controller');

module.exports = {
  byUser: function(req, res) {

    let userPrivacy;

    User.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, user) {
      if (err || !user.length) {
        res.status(400).json({message: 'USER_NOT_FOUND'});
        return;
      }
      userPrivacy = user[0].privacy.profile;

      Post.model
      .find({
        $or: [{userID: req.params.id}, {userIDTo: req.params.id}]
      })
      .exec(function (err, posts) {
        if (err) {
          res.status(500).json({message: 'UNEXPECTED_ERROR'});
          return;
        } else if (!posts.length) {
          res.send([]);
          return;
        } else if (req.params.id == req.auth.userID) {
          res.send(posts);
          return;
        }

        let id = Id.place(req.params.id, req.auth.userID);
        let userConnection;

        Connection.model
        .find({
          user1: id[0],
          user2: id[1]
        })
        .exec(function (err, connection) {
          if (err) {
            res.status(500).json({message: 'UNEXPECTED_ERROR'});
            return;
          } else if (!connection.length) {
            userConnection = null;
          }
          userConnection = connection.connection;
        });

        if (userPrivacy === 2) {
          res.send([]);
          return;
        } else if ((userPrivacy === 1 && userConnection === 1) || 
        (userPrivacy === 0 && userConnection !== 4)) {
          res.send(posts);
          return;
        } 
          res.send([]);
        });
    });
  },
  byPostId: function(req, res) {
    Post.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, post) {
      if (err) {
        res.status(500).json({message: 'UNEXPECTED_ERROR'});
        return;
      } else if (!post.length) {
        res.send([]);
        return;
      } else if (post[0].userID === req.auth.userID) {
        res.send(post[0]);
        return;
      }

      let id = Id.place(req.params.id, req.auth.userID);
      let userConnection;
      let userPrivacy;

      Connection.model
      .find({
        user1: id[0],
        user2: id[1]
      })
      .exec(function (err, connection) {
        if (err) {
          res.status(500).json({message: 'UNEXPECTED_ERROR'});
          return;
        } else if (!connection.length) {
          userConnection = null;
        }
        userConnection = connection.connection;
      });

      User.model
      .find({
        _id: post[0].userID
      })
      .exec(function (err, user) {
        userPrivacy = user[0].privacy.profile;
      });

      if (userPrivacy === 2) return;

      if ((post.privacy === 0 && userConnection !== 4) ||
      (post.privacy === 1 && userConnection === 1)) {
        res.send(post[0]);
        return;
      } 
      res.send([]);
    });
  }
}