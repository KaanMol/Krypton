'use strict';

var Connection = require('../../models/connection.model'),
		Id = require('../../controllers/connection/id.controller');

exports.removeRequest = function(req, res) {

	var id = Id.place(req.auth.userID, req.params.id);

		Connection.model
			.find({
				user1: id[0],
				user2: id[1]
			})
			.exec(function (err, connection){
				if (err) {
					res.json({
						statusCode: 4
					});
				} else if (!connection.length) {
					res.json({
						statusCode: 4
					});
				} else {
					connection[0].remove(function (err, success){
							if (err) {
								res.json({
									statusCode: 4
								});
							} else {
								res.json({
									statusCode: 1
								});
							}
						})
				}
			});
}
