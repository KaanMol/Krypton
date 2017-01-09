// CHANGE WAY OF WORK, CHECK FOR CONNECTION IF NOT CREATE BLOCKED ONE OR SET TO 3
// THIS WILL FAIL

'use strict';

var Connection = require('../../models/connectionModel'),
		Id = require('../../controllers/connection/idPlacement');

exports.blockRequest = function(req, res) {

	var id = Id.place(req.auth.userID, req.params.id);

		Connection.model
			.find({
				user1ID: id[0],
				user2ID: id[1]
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
					connection[0].connection = 3;

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
