var Post = require('../../models/postModel');

exports.editPost = function(req, res) {
	Post.model
		.find({
			_id: req.params.id
		})
		.exec(function (err, post){
			if (err) {
				res.send("post doesn't exist")
			} else if (!post.length) {
				res.send('Post not found');
			}

			if (post[0].userID != req.auth.userID) {
				res.send("You can only edit your own posts!");
			} else {
				if (req.body.privacy != undefined) {
					if (req.body.privacy == 0 || req.body.privacy == 1 || req.body.privacy == 2 || req.body.privacy == 3) {
						post[0].privacy = req.body.privacy
					} else {
						res.send('incorrect integer send');
						return;
					}
				}
				if (req.body.post != undefined) {
					if (req.body.post != post[0].post) {
						if (!post[0].edited.length) {
							post[0].edited.push({
								post: post[0].post,
								time: post[0].posted
							},
							{
								post: req.body.post,
								time: Math.floor(Date.now() / 1000)
							});
						} else {
							post[0].edited.push({
								post: req.body.post,
								time: Math.floor(Date.now() / 1000)
							});
						}
						post[0].post = req.body.post;
					}
				}

				post[0].save(function(err, test) {
					if ( err && err.code !== 11000 ) {
						console.log(err);
						console.log(err.code);
						res.send('Another error showed up');
						return;
					} else {
						res.json({statusCode: 1});
					}
				});
			}
		})
	}
