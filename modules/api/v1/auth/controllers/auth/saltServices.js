'use strict';
exports.salt = function(req, res) {
  User.model
    .find({
      username: req.body.username
    })
    .select('+password')
    .exec(function (err, user){
      if (err) {
        console.log("Unexpected error!");
      };

      res.json(user[0].salt);
    });
}
