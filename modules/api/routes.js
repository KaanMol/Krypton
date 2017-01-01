'use strict';
var router = require('express').Router(),
		subdomain = require('express-subdomain');

// Routes for API version 1
router.use('/v1', require('./v1/routes'));

module.exports = router
