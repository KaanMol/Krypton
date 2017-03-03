var _ = require('lodash');

module.exports = _.extend(
	require('./profile/profile.controller'),
	require('./profile/profile.picture.controller')
);
