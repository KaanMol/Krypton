var Like = require('../../models/likeModel'),
		Post = require('../../models/postModel');

exports.removeLike = function(req, res) {

		Like.model
	    .find({
	      postID: post[0]._id,
				userID: req.auth.userID
	    })
	    .exec(function (err, like){
					post[0].remove(function (err, success){
							if (err) {
								res.json({
									statusCode: 4
								});
							} else {
								res.json({
									statusCode: 1
								});
							}
						});
  		});
}
