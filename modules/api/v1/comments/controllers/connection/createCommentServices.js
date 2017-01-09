'use strict';

var Comments = require('../../models/commentModel'),
		Post = require('../../../post/models/postModel');

exports.createCommentServices = function(req, res) {


	var newComment = new Comments.model({
		userID: req.auth.userID,
		postID: req.params.id,
		post: req.body.post,
	  edited: [],
	  posted: new Date()
	});

	newPost.save(function(err, test) {
		if ( err && err.code !== 11000 ) {
			console.log(err);
			console.log(err.code);
			res.send('Another error showed up');
			return;
		}
		res.json(newPost)
});
}
