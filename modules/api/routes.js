'use strict';
var router = require('express').Router(),
		jwt = require('express-jwt'),
		config = require('../../config/config'),
		unless = require('express-unless'),
		subdomain = require('express-subdomain');

router.use(jwt({secret: config.jwtSecret, requestProperty: 'auth'}).unless({path: ['/v1/auth/login', '/v1/auth/register']}));
router.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized request');
  }
});

// Routes for API version 1
router.use('/v1', require('./v1/routes'));

module.exports = router
