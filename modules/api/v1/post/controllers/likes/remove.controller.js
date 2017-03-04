var Like = require('../../models/likeModel');
var Post = require('../../models/postModel');

exports.removeLike = function(req, res) {
  Like.model
  .find({
    postID: post[0]._id,
    userID: req.auth.userID
  })
  .exec(function (err, like){
    post[0].remove(function (err, success){
      if (err) {
        res.status(500).json({message: 'UNEXPECTED_ERROR'});
      } else {
        res.status(200).json({message: 'SUCCESS'});
      }
    });
  });
}
