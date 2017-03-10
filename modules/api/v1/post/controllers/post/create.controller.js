var Post = require('../../models/post.model');

module.exports = {
  create: function(req, res)
  {
    var User = require('../../../auth/models/user.model');
    User.model
    .find({
      _id: req.auth.userID
    })
    .exec(function (err, user) {
      let privacy;
      if (req.body.privacy === null || 
      (req.body.privacy < 0 || req.body.privacy > 2)) {
        privacy = user[0].privacy.post;
      } else {
        privacy = req.params.privacy;
      }

      var createPost = new Post.model({
        userID: req.auth.userID,
        userIDTo: null,
        privacy: privacy,
        post: req.body.post,
        edited: [],
        posted: Math.floor(Date.now() / 1000)
      });

      createPost.save(function(err, post) {
        if ( err && err.code !== 11000 ) {
          res.status(500).json({message: 'UNEXPECTED_ERROR'});
          return;
        }
        res.json(newPost[0]);
      });
    })
  },
  createTo: function(req, res)
  {
    if (req.params.id === req.auth.userID) {
      res.status(400).json({message: 'ACTION_TO_SELF'});
      return;
    };
    var newPost = new Post.model({
      userID: req.auth.userID,
      userIDTo: req.params.id,
      privacy: req.body.privacy,
      post: req.body.post,
      edited: [],
      posted: (Date.now() / 1000)
    });

    newPost.save(function(err, success) {
      if ( err && err.code !== 11000 ) {
        res.status(500).json({message: 'UNEXPECTED_ERROR'});
        return;
      }
      res.json(newPost)
    });
  }
};
