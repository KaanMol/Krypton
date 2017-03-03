var _ = require('lodash');

module.exports = _.extend(
	require('./comment/create.controller'),
	require('./comment/get.multiple.controller'),
	require('./comment/get.single.controller'),
	require('./comment/remove.controller')
);
