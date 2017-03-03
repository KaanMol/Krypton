var _ = require('lodash');

module.exports = _.extend(
	require('./profile/profileServices'),
	require('./profile/profilePictureServices')
);
