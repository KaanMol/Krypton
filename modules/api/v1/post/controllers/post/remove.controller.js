var Post = require('../../models/post.model'),
		Comments = require('../../../comments/models/comment.model');

exports.removePost = function(req, res) {

	Post.model
		.find({
			_id: req.params.id
		})
		.exec(function (err, post){

			Comments.model
		    .find({
		      postID: post[0]._id
		    })
		    .exec(function (err, comments){
					if(req.auth.userID == post[0].userID) {
						post[0].remove(function (err, success){
								if (err) {
									res.json({
										statusCode: 4
									});
								}
									res.json({
										statusCode: 1
									});

							});
							comments.remove(function (err, success){});
					} else {
						res.json({statusCode: 5});
					}


		  });



		});

}
