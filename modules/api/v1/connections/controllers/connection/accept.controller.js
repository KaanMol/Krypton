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
					res.json({
						statusCode: 4
					});
				} else if (!connection.length){
					res.json({
						statusCode: 4
					});
				} else {
					connection[0].connection = 1;
					connection[0].connectedSince = Math.floor(Date.now() / 1000);
					connection[0].save(function(err, test) {
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
}
