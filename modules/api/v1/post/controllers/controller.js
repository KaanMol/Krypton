var _ = require('lodash');

module.exports = _.extend(
	// require('./likes/addLike'),
	// require('./likes/getLikes'),
	// require('./likes/removeLike'),
	require('./post/createPostServices'),
	require('./post/readPostServices'),
	require('./post/removePostServices'),
	require('./post/editPostServices'),
	require('./post/allPosts')
);
