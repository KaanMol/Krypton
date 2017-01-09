var _ = require('lodash');

module.exports = _.extend(
	require('./connection/getCommentsServices'),
	require('./connection/createCommentServices')
);
