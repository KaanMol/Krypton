'use strict';
var router = require('express').Router(),
		jwt = require('express-jwt'),
		config = require('../../config/config'),
		unless = require('express-unless'),
		subdomain = require('express-subdomain');
const path = require('path');

router.use(jwt({secret: config.jwtSecret, requestProperty: 'auth'}).unless({path: ['/v1/auth/login', '/v1/auth/register', "/AppTest", "/storage/kaan", "/storage/kaan2"]}));
router.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized request');
  }
});

// Routes for API version 1
router.use('/v1', require('./v1/routes'));
router.get('/storage/kaan', function(req, res) {res.sendFile(__dirname + "/storage/kaan.jpg")});
router.get('/storage/kaan2', function(req, res) {res.sendFile(__dirname + "/storage/kaan2.jpg")});
router.get('/', function(req, res) {res.sendFile('./developers/view/index_view.html')});
module.exports = router
