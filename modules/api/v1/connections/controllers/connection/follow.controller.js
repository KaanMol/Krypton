/**
* @todo unfinished follow system
*/
'use strict';

var Connection = require('../../models/connection.model'),
		Id = require('../../controllers/connection/id.controller');

exports.followRequest = function(req, res) {

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
				} else if (!connection.length){
					res.json({
						statusCode: 4
					});
				} else {
					connection[0].connection = 11;

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
