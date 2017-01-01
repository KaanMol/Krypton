var User = require('../../models/userModel');
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
        			success: false,
        			message: "Couldn't find user!"
        		});
    		} else {
    			if (req.body.password == user[0].password) {
	    			res.json({
	        			success: true,
	        			message: 'Enjoy your token!',
	        			// token: jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60*60), id: user[0]._id, admin: user[0].admin }, secret)
	        		});
	        	} else {
	        		res.json({
	        			success: false,
	        			message: 'Wrong password!'
	        		});
	        	}
	   		}    
		});
}