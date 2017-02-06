'use strict';

var Connection = require('../../models/connectionModel'),
		User = require('../../../auth/models/userModel'),
		Id = require('../../controllers/connection/idPlacement');

exports.sendRequest = function(req, res) {

	var id = Id.place(req.auth.userID, req.params.id);

		if (req.auth.userID == req.params.id) {
			res.json({statusCode: 2})
		} else {
			Connection.model
				.find({
					sender: req.auth.userID,
					receiver: req.params.id,
					connection: 0
				})
				.exec(function (err, connection) {
					if (err) {
						res.send('something went wrong');
					} else if (!connection.length) {
						User.model
							.find({
								_id: req.params.id
							})
							.exec(function (err, user){
								if (err) {
									res.send("user doesn't exist")
								} else if (!user.length) {
									res.send("user doesn't exist")
								} else {

									var connection = new Connection.model({
										user1: id[0],
										user2: id[1],
										connection: 0,
										sender: req.auth.userID,
										receiver: req.params.id,
										connectedSince: null
									});

									connection.save(function(err, test) {
										if ( err && err.code !== 11000 ) {
											console.log(err);
											console.log(err.code);
											res.send('Another error showed up');
											return;
										}

										res.json({statusCode: 1});
									});
								}
						});
					} else {
						res.json({statusCode: 3})
					}
			});
		}
}
