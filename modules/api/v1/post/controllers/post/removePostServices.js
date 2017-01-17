var Post = require('../../models/postModel'),
		Comments = require('../../../comments/models/commentModel');

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
								} else {
									res.json({
										statusCode: 1
									});
								}
							});
							comments.remove(function (err, success){});
					} else {
						res.send('You dont have the permissions to remove this post')
					}


		  });



		});

}
