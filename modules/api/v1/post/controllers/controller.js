var _ = require('lodash');

module.exports = _.extend(
	// require('./likes/addLike'),
	// require('./likes/getLikes'),
	// require('./likes/removeLike'),
	require('./post/all.controller'),
	require('./post/create.controller'),
	require('./post/edit.controller'),
	require('./post/read.controller'),
	require('./post/remove.controller')
);
