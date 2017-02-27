'use strict';
var router = require('express').Router();
var jwt = require('express-jwt');
var config = require('../../../config/config');
router.use(jwt({secret: config.jwtSecret, requestProperty: 'auth'}).unless({path: ['/v1/auth/login', '/v1/auth/register']}));
router.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized request');
  }
});

router.use('/auth', require('./auth/routes/routes'));

router.use('/connections', require('./connections/routes/routes'));

router.use('/user', require('./users/routes/routes'));

router.use('/post', require('./post/routes/routes'));

router.use('/comment', require('./comments/routes/routes'));

router.use('/search', require('./search/routes/routes'));

module.exports = router;
