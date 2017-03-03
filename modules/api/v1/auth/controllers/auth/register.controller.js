'use strict';
var User = require('../../models/user.model'),
		config = require('../../../../../../config/config');

exports.register = function(req, res) {
	var crypto = require('crypto'),
			salt = crypto.randomBytes(16).toString('hex'),
			password = crypto.createHash('sha256').update(req.body.password).digest('hex'),
			saltedPassword = crypto.createHmac('sha256', salt)
				.update(password)
				.digest('hex');
	var newUser = new User.model({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		username: req.body.username,
		password: saltedPassword,
		email: req.body.email,
		salt: salt,
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
		created: Math.floor(Date.now() / 1000)
	});

	User.model
		.find({
			username: req.body.username
		})
		.exec(function (err, nameCheck){
			if (nameCheck.length != 0) {
				res.status(409).json({
					message: "DUPLICATE_USERNAME"
				});
				return;
			}

			User.model
				.find({
					email: req.body.email
				})
				.exec(function (err, emailCheck) {
					if (emailCheck.length != 0) {
						res.status(409).json({
							message: "DUPLICATE_EMAIL"
						});
						return;
					}

					newUser.save(function(err, user) {
						if ( err && err.code !== 11000 ) {
							console.log(err);
							res.status(500).json({message: "Unexpected error"});
							return;
						}
						res.json({
							token: require('jsonwebtoken').sign({
								/*exp: Math.floor(Date.now() / 1000) + (60*60),*/
								userID: user._id,
								admin: user.admin
							}, config.jwtSecret)
						});
					});
				});
		});



}
