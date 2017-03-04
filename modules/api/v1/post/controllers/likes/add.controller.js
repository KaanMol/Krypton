var Like = require('../../models/likeModel');
var Post = require('../../models/postModel');

exports.addLike = function(req, res) {
  var newLike = new Post.model({
    userID: req.auth.userID,
    postID: req.params.id,
    typeLike: req.body.like
  });

  newLike.save(function(err, success) {
    if ( err && err.code !== 11000 ) {
      res.status(500).json({message: 'UNEXPECTED_ERROR'});
      return;
    }
    res.json(newLike)
  });
}
