'use strict';
exports.salt = function(req, res) {
  User.model
    .find({
      username: req.body.username
    })
    .exec(function (err, user){
      if (err) {
        console.log("Unexpected error!");
      };

      res.json({ salt: user[0].salt});
    });
}
