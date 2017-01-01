'use strict';
var User = require('../../models/userModel');
exports.register = function(req, res) {
	var user = new User.model({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		birthdate: req.body.birthdate,
		customURL: null,
		customPreferences: {
			theme: "standard"
		},
		admin: false,
		created: new Date()
	});

	user.save(function(err, test) {
		if ( err && err.code !== 11000 ) {
    		console.log(err);
    		console.log(err.code);
    		res.send('Another error showed up');
    		return;
  		}

		res.json({
			success: true,
			message: 'Enjoy your token!',
			// token: jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60*60), id:test._id }, secret)
		});
	});
}
