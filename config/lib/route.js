'use strict';
var api = require('express').Router(),
	router = require('express').Router(),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	vhost = require('vhost');



router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

// Routes for API version 1
router.use('/v1', require('../../modules/api/routes'));
// Routes for client
router.use('/', require('../../modules/client/routes'));


module.exports = router
