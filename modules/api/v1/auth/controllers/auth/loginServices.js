var User = require('../../models/userModel'),
		config = require('../../../../../../config/config');

exports.login = function(req, res) {
	User.model
		.find({
			username: req.body.username
		})
		.select('+password')
		.exec(function (err, user){
			if (err) {
				console.log("Unexpected error!");
			};

			if (!user.length) {
        		res.json({
        			success: 0
        		});
    		} else {
    			if (req.body.password == user[0].password) {
	    			res.json({
	        			success: 1,
	        			token: require('jsonwebtoken').sign({ /*exp: Math.floor(Date.now() / 1000) + (60*60),*/userID: user[0]._id, admin: user[0].admin }, config.jwtSecret)
	        		});
	        	} else {
	        		res.json({success: 10});
	        	}
	   		}
		});
}
