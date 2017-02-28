'use strict';
var User = require('../../models/userModel'),
		config = require('../../../../../../config/config');

exports.register = function(req, res) {

	var user = new User.model({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		salt: req.body.salt,
		birthdate: req.body.birthdate,
		profilePicture: null,
		privacy: {
			profile: 0,
			posts: 0
		},
		customURL: null,
		customPreferences: {
			theme: "standard"
		},
		admin: false,
		created: new Date()
	});

	User.model
		.find({
			username: req.body.username
		})
		.exec(function (err, user){
			if (user.length != 0) {res.json({statusCode: "duplicate username"}); return;}
			User.model
				.find({
					email: req.body.email
				})
				.exec(function (err, user){
					if (user.length != 0) {return res.json({statusCode: "duplicate email"}); }
					user.save(function(err, test) {
						console.log(err)
						if ( err && err.code !== 11000 ) {
								console.log(err);
								console.log(err.code);
								res.send('Another error showed up');
								return;
							}

							res.json({
									success: 1,
									token: require('jsonwebtoken').sign({ /*exp: Math.floor(Date.now() / 1000) + (60*60),*/userID: test._id, admin: test.admin }, config.jwtSecret)
								});
					});
				});
		});



}
