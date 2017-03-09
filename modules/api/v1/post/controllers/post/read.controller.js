'use strict';

var Post = require('../../models/post.model');
var Connection = require('../../../connections/models/connection.model');
var User = require('../../../auth/models/user.model');
var Id = require('../../../connections/controllers/connection/id.controller');

module.exports = {
  byUser: function(req, res) 
  {
    User.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, user) {
      if (err || !user.length) {
        res.status(400).json({message: 'USER_NOT_FOUND'});
        return;
      } else if (req.params.id === req.auth.userID ) {
        Post.model
        .find({
          $or: [{userID: req.params.id}, {userIDTo: req.params.id}]
        })
        .exec(function (err, posts) { 
          if(!posts.length) {
            res.send([]);
            return;
          }
          res.send(posts);
          return;
         })
      }

      let id = Id.place(req.auth.userID, req.params.id);
      
      Connection.model
      .find({
        user1: id[0],
        user2: id[1]
      })
      .exec(function (err, connection) {
        if (err) {
          res.status(500).json({message: 'UNEXPECTED_ERROR'});
          return;
        } else if (connection[0].connection === 4) {
          res.send([]);
          return;
        } else if (user[0].privacy.profile === 0 && connection[0].connection !== 1) {
          Post.model
          .find({
            $or: [{userID: req.params.id}, {userIDTo: req.params.id}],
            privacy: 0
          })
          .exec(function (err, posts) { 
            if(!posts.length) {
              res.send([]);
              return;
            }
            res.send(posts);
          });
        } else if ((user[0].privacy.profile === 1 || user[0].privacy.profile === 0) 
        && connection[0].connection === 1) {
          Post.model
          .find({
            $and: [
              {$or: [{userID: req.params.id}, {userIDTo: req.params.id}]},
              {$or: [{privacy: 0}, {privacy: 1}]}
            ]
          })
          .exec(function (err, posts) { 
            if(!posts.length) {
              res.send([]);
            }
            res.send(posts);
          });
        } else {
          res.send([]);
        }
      })
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