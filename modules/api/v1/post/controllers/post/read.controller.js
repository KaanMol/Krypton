'use strict';

var Post = require('../../models/post.model'),
		Connection = require('../../../connections/models/connection.model'),
		User = require('../../../auth/models/user.model'),
		Id = require('../../../connections/controllers/connection/id.controller');

exports.readPost = function(req, res) {

	Post.model
		.find({
			_id: req.params.id
		})
		.exec(function (err, post) {
			if (err) {
				res.status(500).json({message: 'UNEXPECTED_ERROR'});
			} else if (!post.length) {
				res.status(404).json({message: 'POSTS_NOT_FOUND'});
			} else if (post[0].privacy == 3 && req.auth.userID == post[0].userID) {
				res.send(post[0]);
			} else if (req.auth.userID == post[0].userID) {
				res.send(post[0]);
			} else if (post[0].privacy == 0) {
				res.send(post[0]);
			} else {

				var id = Id.place(post[0].userID, req.auth.userID);

				Connection.model
					.find({
						user1: id[0],
						user2: id[1]
					})
					.exec(function (err, connection) {
						if (post[0].privacy == 1 && connection[0].connection == 1) {
							res.send(post[0]);
						} else if (post[0].privacy == 2) {
							res.status(500).json({message: 'UNEXPECTED_ERROR'});
						} else {
							res.status(500).json({message: 'ACCESS_DENIED'});
						}
					});
			}
	});
}
