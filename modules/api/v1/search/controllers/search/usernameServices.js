var User = require('../../../auth/models/userModel'),
		config = require('../../../../../../config/config');

exports.username = function(req, res) {
	User.model
		.find({
			username: req.body.username
		})
		.exec(function (err, user){
			if (err) {
				console.log("Unexpected error!");
			};

			if (!user.length) {
        		res.json({
        			success: 0
        		});
    		} else {
    			res.json(user)
	   		}
		});
}
