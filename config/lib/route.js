'use strict';
var api = require('express').Router(),
	router = require('express').Router(),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	vhost = require('vhost'),
	path = require('path');

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

// Routes for client
router.use('/modules', express.static(path.join(__dirname, '../../modules/client')))
router.all('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../modules/client/index.html'));
});
// Routes for API version 1
router.use('/', require('../../modules/api/routes'));



module.exports = router
