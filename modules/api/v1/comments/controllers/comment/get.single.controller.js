'use strict';

var Comments = require('../../models/comment.model');

exports.getComment = function (req, res) {

  Comments.model
    .find({
      _id: req.params.commentID,
      postID: req.params.id
    })
    .exec(function (err, post){
      if (err) {
        res.send('no comments found for post');
        return;
      }

      res.json(post[0])

    });

}
