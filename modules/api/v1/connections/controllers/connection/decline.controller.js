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
					res.status(500).json({message: 'UNEXPECTED_ERROR'});
				} else if (!connection.length){
					res.status(404).json({message: 'CONNECTION_NOT_FOUND'});
				} else {
					connection[0].remove(function (err, success) {
						if (err) {
							res.status(500).json({message: 'UNEXPECTED_ERROR'});
						} else {
							res.status(200).json({message: 'SUCCESS'});
						}
					})
				}
		});
}
