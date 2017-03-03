'use strict';

var Comments = require('../../models/comment.model');

exports.removeComment = function(req,res) {
  Comments.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, comments) {
      if (!comments.length) {
        res.status(404).json({message: "COMMENT_NOT_FOUND"});
      } else if (req.auth.userID == comments[0].userID) {
        if (err) {
          res.status(500).json({message: "UNEXPECTED_ERROR"});
          return;
        };

        comments[0].remove(function (err, success) {
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
