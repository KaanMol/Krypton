var Like = require('../../models/likeModel'),
		Post = require('../../models/postModel');

exports.getLikes = function(req, res) {
	Like.model
    .find({
      postID: req.params.id
    })
    .exec(function (err, like){
			if (err) {
				res.status(500).json({message: 'UNEXPECTED_ERROR'});
				return;
			}
			res.json(like);
		});
}
