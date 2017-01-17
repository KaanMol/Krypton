'use strict';

var Comments = require('../../models/commentModel');

exports.removeComment = function(req,res) {
  Comments.model
    .find({
      _id: req.params.id
    })
    .exec(function (err, comments){
      if (req.auth.userID == comments[0].userID) {
        if (err) {
          res.json({
            statusCode: 4
          });
        };

        comments[0].remove(function (err, success){
            if (err) {
              res.json({statusCode: 4});
            } else {
              res.json({statusCode: 1});
            }
        });
      } else {
        res.json({statusCode: 5});
      }
  });
};
