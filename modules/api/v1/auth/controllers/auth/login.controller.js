var User = require('../../models/user.model'),
		config = require('../../../../../../config/config');

exports.login = function(req, res) {
	User.model
		.find({
			username: req.body.username
		})
		.select('+password')
		.select('+salt')
		.exec(function (err, user){
			if (err) {
				res.status(500).json({message: "UNEXPECTED_ERROR"})
			};

			if (!user.length) {
    		res.status(401).json({message: 'USER_NOT_FOUND'});
  		} else {
				var crypto = require('crypto'),
						password = crypto.createHash('sha256')
							.update(req.body.password)
							.digest('hex'),
						saltedPassword = crypto.createHmac('sha256', user[0].salt)
							.update(password)
							.digest('hex');
  			if (saltedPassword == user[0].password) {
  				res.json({
      			token: require('jsonwebtoken').sign({
							 /*exp: Math.floor(Date.now() / 1000) + (60*60),*/
							 userID: user[0]._id,
							 admin: user[0].admin
						 }, config.jwtSecret)
      		});
      	} else {
      		res.status(401).json({message: 'BAD_CREDENTIALS'});
      	}
   		}
		});
}
