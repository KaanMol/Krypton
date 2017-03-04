'use strict';

var Comments = require('../../models/comment.model');

exports.getComments = function (req, res) {
  Comments.model
    .find({
      postID: req.params.id
    })
    .exec(function (err, comments){
      if (err) {
        res.status(404).json({message: "COMMENTS_NOT_FOUND"});
        return;
      }
      res.json(comments);
    });
}
