'use strict';

var Connection = require('../../models/connection.model');

exports.declineRequest = function(req, res) {

		Connection.model
			.find({
				sender: req.params.id,
				receiver: req.auth.userID,
				connection: 0
			})
			.exec(function (err, connection){
				if (err) {
					res.json({
						statusCode: 4
					});
				} else if (!connection.length){
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
