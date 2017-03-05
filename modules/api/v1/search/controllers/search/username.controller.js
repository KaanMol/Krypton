var User = require('../../../auth/models/user.model');
var config = require('../../../../../../config/config');

exports.username = function(req, res) {
  User.model
  .find({
    username: req.body.username
  })
  .exec(function (err, user){
    if (err) {
      res.status(500).json({message: 'UNEXPECTED_ERROR'});
    };

    if (!user.length) {
      res.status(404).json({message: 'USER_NOT_FOUND'});
    } else {
      res.json(user)
    }
  });
}
