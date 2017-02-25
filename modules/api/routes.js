'use strict';
var router = require('express').Router(),
		jwt = require('express-jwt'),
		config = require('../../config/config'),
		unless = require('express-unless'),
		subdomain = require('express-subdomain');
const path = require('path');



// Routes for API version 1
router.use('/v1', require('./v1/routes'));
router.get('/connectivity', function(req, res) {res.json({statusCode: 1})});
router.get('/storage/kaan', function(req, res) {res.sendFile(__dirname + "/storage/kaan.jpg")});
router.get('/storage/kaan2', function(req, res) {res.sendFile(__dirname + "/storage/kaan2.jpg")});
module.exports = router
