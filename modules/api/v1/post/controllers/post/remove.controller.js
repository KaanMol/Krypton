var Post = require('../../models/post.model');
var Comments = require('../../../comments/models/comment.model');

module.exports = {
  remove: function(req, res)
  {
    Post.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, post) {
      if (err) {
        res.status(500); 
        return;
      } else if (!post.length) {
        res.status(404);
        return;
      }
      
      Comments.model
      .find({
        postID: post[0]._id
      })
      .exec(function (err, comments) {
        if (post[0].userID !== req.auth.userID) {res.status(401); return;};

        post[0].remove(function (err, success) {
          if (err) {
            res.status(500);
            return;
          }
          res.status(200);
        });
        comments.remove(function (err, success){});
      })
    })
  }
};
