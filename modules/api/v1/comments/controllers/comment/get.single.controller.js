'use strict';

var Comments = require('../../models/comment.model');

exports.getComment = function (req, res) {

  Comments.model
    .find({
      _id: req.params.commentID,
      postID: req.params.id
    })
    .exec(function (err, comment){
      if (err) {
        res.status(404).json({message: "COMMENT_NOT_FOUND"})
        return;
      }
      res.json(comment[0])
    });

}
