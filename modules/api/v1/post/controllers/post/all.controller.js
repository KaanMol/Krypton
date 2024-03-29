'use strict';

var Post = require('../../models/post.model');
var Connection = require('../../../connections/models/connection.model');
var User = require('../../../auth/models/user.model');
var Id = require('../../../connections/controllers/connection/id.controller');

exports.allPosts = function(req, res) {
  Post.model
  .find({
    $or: [{userID: req.params.id}, {userIDTo: req.params.id}]
  })
  .exec(function (err, post) {
    if (err) {
      res.status(500).json({message: 'UNEXPECTED_ERROR'});
    } else if (!post.length) {
      res.status(404).json({message: 'POSTS_NOT_FOUND'});
    } else if (post[0].privacy == 3 && req.auth.userID == post[0].userID) {
      res.send(post);
    } else if (req.auth.userID == post[0].userID) {
      res.send(post);
    } else if (post[0].privacy == 0) {
      res.send(post);
    } else  {
      var id = Id.place(post[0].userID, req.auth.userID);
      Connection.model
      .find({
        user1: id[0],
        user2: id[1]
      })
      .exec(function (err, connection){
        if (post[0].privacy == 1 && connection[0].connection == 1) {
          res.send(post);
        } else if (post[0].privacy == 2) {
          res.status(500).json({message: 'UNDER_CONSTRUCTION'});
        } else {
          res.status(403).json({message: 'ACCESS_DENIED'});
        }
      });
    }
  });
}
