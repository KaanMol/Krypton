var _ = require('lodash');

module.exports = _.extend(
	require('./auth/loginServices'),
	require('./auth/registerServices'),
	require('./auth/verifyServices'),
	require('./auth/saltServices')
);
