var Comments = require('../../models/commentModel');

exports.createComment = function(req, res) {
	var newComment = new Comments.model({
		userID: req.auth.userID,
		postID: req.params.id,
		post: req.body.post,
	  edited: [],
	  created: new Date()
	});

	newComment.save(function(err, test) {
		if ( err && err.code !== 11000 ) {
			console.log(err);
			console.log(err.code);
			res.send('Another error showed up');
			return;
		}
		res.json(newComment)
});
}
