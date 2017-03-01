'use strict';

var Post = require('../../models/postModel'),
		Connection = require('../../../connections/models/connectionModel'),
		User = require('../../../auth/models/userModel'),
		Id = require('../../../connections/controllers/connection/idPlacement');

exports.allPosts = function(req, res) {

	Post.model
		.find({
			$or: [{userID: req.params.id}, {userIDTo: req.params.id}]
		})
		.exec(function (err, post){
			if (err) {
				res.send("post doesn't exist")
			} else if (!post.length) {
				res.send('Post not found');
			} else if (post[0].privacy == 3 && req.auth.userID == post[0].userID) {
				res.send(post);
			} else if (req.auth.userID == post[0].userID) {
				res.send(post);
			} else if (post[0].privacy == 0) {
				res.send(post);
			} else  {

				var id = Id.place(post[0].userID, req.auth.userID);

				Connection.model
					.find({
						user1: id[0],
						user2: id[1]
					})
					.exec(function (err, connection){
						if (post[0].privacy == 1 && connection[0].connection == 1) {
							res.send(post);
						} else if (post[0].privacy == 2) {
							res.send('Function under construction.');
						} else {
							res.send('No permissions to view this post')
						}
					});
			}
	});
}
