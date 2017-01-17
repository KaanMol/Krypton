var _ = require('lodash');

module.exports = _.extend(
	require('./like/addLike'),
	require('./post/removeLike')
);
