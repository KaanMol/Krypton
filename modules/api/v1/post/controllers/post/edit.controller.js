var Post = require('../../models/post.model');

module.exports = {
  edit: function(req, res)
  {
    Post.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, post) {
      if (err) {
        res.status(500).json({message: 'UNEXPECTED_ERROR'});
      } else if (!post.length) {
        res.status(404).json({message: 'POSTS_NOT_FOUND'});
      } else if (post[0].userID != req.auth.userID) {
        res.status(401).json({message: 'UNAUTHORIZED'});
      } else if (req.body.privacy == undefined ||
      (req.body.privacy < 0 && req.body.privacy > 3)) {
        res.status(400).json({message: 'INVALID_REQUEST'});
        return;
      };

      post[0].privacy = req.body.privacy;

      if (req.body.post != undefined && req.body.post != post[0].post) {
        post[0].post = req.body.post;

        if (!post[0].edited.length) {
          post[0].edited.push({
            post: post[0].post,
            time: post[0].posted
          },
          {
            post: req.body.post,
            time: Math.floor(Date.now() / 1000)
          });
        } else {
          post[0].edited.push({
            post: req.body.post,
            time: Math.floor(Date.now() / 1000)
          })
        };
      };
      post[0].save(function(err, success) {
        if ( err && err.code !== 11000 ) {
          res.status(500).json({message: 'UNEXPECTED_ERROR'});
          return;
        } else {
          res.status(200).json({message: 'SUCCESS'});
        }
      });
    });
  }
};
