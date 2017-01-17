var _ = require('lodash');

module.exports = _.extend(
	require('./comment/getCommentServices'),
	require('./comment/createCommentServices'),
	require('./comment/removeCommentServices'),
	require('./comment/getCommentsServices')
);
