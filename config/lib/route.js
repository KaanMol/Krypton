'use strict';
var api = require('express').Router(),
	router = require('express').Router(),
	bodyParser = require('body-parser'),
	subdomain = require('express-subdomain');



router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());


// Routes for API version 1
router.use(subdomain('developers', require('../../modules/api/routes')));

// Routes for client
router.use('/', require('../../modules/client/routes'));


module.exports = router
