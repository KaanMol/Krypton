var Post = require('../../models/postModel');

exports.createPost = function(req, res) {
	var newPost = new Post.model({
		userID: req.auth.userID,
		privacy: req.body.privacy,
		post: req.body.post,
	  edited: null,
	  posted: new Date()
	});

	newPost.save(function(err, test) {
		if ( err && err.code !== 11000 ) {
			console.log(err);
			console.log(err.code);
			res.send('Another error showed up');
			return;
		}
		res.send('lol')
});
}
