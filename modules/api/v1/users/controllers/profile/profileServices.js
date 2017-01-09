var User = require('../../../auth/models/userModel');

exports.profile = function(req, res) {
	User.model
		.find({
			_id: req.params.id
		})
		.exec(function (err, user){
			if (err) {
				res.status(404).send('Not found');
			} else if(!user.length) {
				res.json({
        			success: false,
        			message: "Couldn't find user!"
        		});
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
