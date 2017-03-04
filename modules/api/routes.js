'use strict';
var router = require('express').Router(),
  jwt = require('express-jwt'),
  config = require('../../config/config'),
  unless = require('express-unless'),
  subdomain = require('express-subdomain');
const path = require('path');

// Routes for API version 1
router.use('/v1', require('./v1/routes'));
module.exports = router
