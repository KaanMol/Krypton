var Post = require('../../models/post.model');
var Comments = require('../../../comments/models/comment.model');

exports.removePost = function(req, res) {
  Post.model
  .find({
    _id: req.params.id
  })
  .exec(function (err, post){
    Comments.model
    .find({
      postID: post[0]._id
    })
    .exec(function (err, comments){
      if(req.auth.userID == post[0].userID) {
        post[0].remove(function (err, success){
          if (err) {
            res.status(500).json({message: 'UNEXPECTED_ERROR'});
          }
          res.status(200).json({message: 'SUCCESS'});
        });
        comments.remove(function (err, success){});
      } else {
        res.status(500).json({message: 'UNAUTHORIZED'});
      }
    });
  });
}
