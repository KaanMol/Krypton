var Like = require('../../models/likeModel'),
		Post = require('../../models/postModel');

exports.addLike = function(req, res) {
	var newLike = new Post.model({
		userID: req.auth.userID,
		postID: req.params.id,
		typeLike: req.body.like
	});

	newLike.save(function(err, test) {
		if ( err && err.code !== 11000 ) {
			console.log(err);
			console.log(err.code);
			res.send('Another error showed up');
			return;
		}
		res.json(newLike)
});
}
