var _ = require('lodash');

module.exports = _.extend(
  require('./auth/login.controller'),
  require('./auth/register.controller'),
  require('./auth/verify.controller')
);
