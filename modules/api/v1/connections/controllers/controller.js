var _ = require('lodash');

module.exports = _.extend(
	require('./connection/accept.controller'),
	require('./connection/block.controller'),
	require('./connection/decline.controller'),
	require('./connection/follow.controller'),
	require('./connection/pending.controller'),
	require('./connection/remove.controller'),
	require('./connection/send.controller'),
	require('./connection/status.controller')
);
