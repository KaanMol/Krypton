'use strict';

var Connection = require('../../models/connectionModel'),
		User = require('../../../auth/models/userModel'),
		Id = require('../../controllers/connection/idPlacement');

exports.sendRequest = function(req, res) {

	var id = Id.place(req.auth.userID, req.params.id);

		if (req.auth.userID == req.params.id) {
			res.status(500).json({message: 'UNEXPECTED_ERROR'});
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

									connection.save(function(err, success) {
										if ( err && err.code !== 11000 ) {
											res.status(500).json({message: 'UNEXPECTED_ERROR'});
											return;
										}
										res.status(200).json({message: 'SUCCESS'});
									});
								}
						});
					} else {
						res.status(500).json({message: 'EXISTING_REQUEST'});
					}
			});
		}
}
