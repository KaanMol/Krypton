'use strict';

var Connection = require('../../models/connection.model'),
		User = require('../../../auth/models/user.model'),
		Id = require('../../controllers/connection/id.controller');

exports.check = function(req, res) {

	var id = Id.place(req.auth.userID, req.params.id);

		if (req.params.id == "all") {
			Connection.model
				.find({
					$or: [{user1: req.auth.userID}, {user2: req.auth.userID}],
					connection: 1
				})
				.exec(function (err, connection){
					if (err) {
						res.json({
							success: 4
						});
					} else if (!connection.length){
						res.json([]);
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
						res.json([{
							success: 4
						}]);
					} else if (!connection.length){
						res.json([{
							success: 4
						}]);
					} else {
	          Connection.model
	            .find({
	              user1: id[0],
	              user2: id[1]
	            })
	            .exec(function (err, connection){
	              if (err) {
	                res.json([{statusCode: 4}])
	              } else {
	                res.json(connection[0])
	              }
	          });
					}
			});
		}
}
