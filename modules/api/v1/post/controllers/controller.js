var _ = require('lodash');

module.exports = _.extend(
	require('./post/createPostServices'),
	require('./post/readPostServices'),
	require('./post/removePostServices'),
	require('./post/editPostServices')
);
