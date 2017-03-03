'use strict';

var Connection = require('../../models/connection.model');

exports.acceptRequest = function(req, res) {
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
				connection[0].connection = 1;
				connection[0].connectedSince = Math.floor(Date.now() / 1000);
				connection[0].save(function(err, test) {
					if ( err && err.code !== 11000 ) {
						res.status(500).json({message: 'UNEXPECTED_ERROR'});
						return;
					}
					res.status(200).json({message: 'SUCCESS'});
				});
			}
		});
}
