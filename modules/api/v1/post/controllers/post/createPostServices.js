var Post = require('../../models/postModel');

exports.createPost = function(req, res) {
	var newPost = new Post.model({
		userID: req.auth.userID,
		userIDTo: null,
		privacy: req.body.privacy,
		post: req.body.post,
	  edited: [],
	  posted: Math.floor(Date.now() / 1000)
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

exports.createPostTo = function(req, res) {
	//Check if blocked and privacy shit
	var newPost = new Post.model({
		userID: req.auth.userID,
		userIDTo: req.params.id,
		privacy: req.body.privacy,
		post: req.body.post,
	  edited: [],
	  posted: (Date.now() / 1000)
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
