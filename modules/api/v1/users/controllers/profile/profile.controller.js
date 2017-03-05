var User = require('../../../auth/models/user.model');

exports.profile = function(req, res) {
  User.model
  .find({
    _id: req.params.id
  })
  .exec(function (err, user){
    if (err) {
      res.status(500).json({message: "UNEXPECTED_ERROR"});
    } else if(!user.length) {
      res.status(500).json({message: "USER_NOT_FOUND"});
    } else {
      if (user[0].privacy.profile == 0) {
        res.json(user[0]);
      } else if (user[0].privacy.profile == 1) {
        // Make function to call database that can check if users are friends
        // Reason for not making it YET: friends module not implemented
        res.json(user[0]);
      } else {
        res.json({
          firstName: user[0].firstName,
          lastName: user[0].lastName,
          customURL: user[0].customURL
        })
      }
    }
  });
}
