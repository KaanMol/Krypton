'use strict';

var Comments = require('../../models/commentModel');

exports.getComments = function (req, res) {
  
    Comments.model
      .find({
        postID: req.params.id
      })
      .exec(function (err, post){
        if (err) {
          res.send('no comments found for post');
          return;
        }

        res.json(post)

      });
}
