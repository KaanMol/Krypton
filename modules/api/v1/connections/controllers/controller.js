var _ = require('lodash');

module.exports = _.extend(
	require('./connection/sendRequestServices'),
	require('./connection/statusServices'),
	require('./connection/acceptRequestServices'),
	require('./connection/removeRequestServices'),
	require('./connection/followRequestServices'),
	require('./connection/blockRequestServices')
);
