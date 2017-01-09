'use strict';

var Connection = require('../../models/connectionModel'),
		User = require('../../../auth/models/userModel'),
		Id = require('../../controllers/connection/idPlacement');

exports.check = function(req, res) {

	var id = Id.place(req.auth.userID, req.params.id);

		if (req.params.id == "all") {
			Connection.model
				.find({
					receiver: req.auth.userID,
					connection: 0
				})
				.exec(function (err, connection){
					if (err) {
						res.json({
							success: 4
						});
					} else if (!connection.length){
						res.json({
							success: 4
						});
					} else {
						res.json(connection)
					}
			});
		} else {
	    User.model
				.find({
					_id: req.params.id
				})
				.exec(function (err, connection){
					if (err) {
						res.json({
							success: 4
						});
					} else if (!connection.length){
						res.json({
							success: 4
						});
					} else {
	          Connection.model
	            .find({
	              user1: id[0],
	              user2: id[1]
	            })
	            .exec(function (err, connection){
	              if (err) {
	                res.send("connection doesn't exist")
	              } else {
	                res.json(connection[0])
	              }
	          });
					}
			});
		}
}
