'use strict';

var Comments = require('../../models/comment.model');

exports.removeComment = function(req,res) {
  Comments.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, comment) {
      if (!comment.length) {
        res.status(404).json({message: "COMMENT_NOT_FOUND"});
      } else if (req.auth.userID == comment[0].userID) {
        if (err) {
          res.status(500).json({message: "UNEXPECTED_ERROR"});
          return;
        };

        comment[0].remove(function (err, success) {
          if (err) {
            res.status(500).json({message: "UNEXPECTED_ERROR"});
            return;
          } else {
            res.status(200).json({"message" : "SUCCESS"});
          }
        });
      } else {
        res.status(401).json({"message" : "UNAUTHORIZED"});
      }
  });
};
