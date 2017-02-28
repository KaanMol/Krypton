'use strict';
var api = require('express').Router(),
	router = require('express').Router(),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

// Routes for client
router.use('/modules', express.static(path.join(__dirname, '../../modules/client')));

router.all('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../modules/client/index.html'));
});

// Routes for API version 1
router.use('/', require('../../modules/api/routes'));
	// var modules = fs.readdirSync(__dirname + '/../../modules/api/v1')
	// 							.filter(file => fs.statSync(path.join(__dirname + '/../../modules/api/v1', file)).isDirectory())
	//
	// for (var i = 0; i<modules.length; i++) {
	// 	if (modules[i] = "messenger") continue;
	//
	// 	require(path.join(__dirname + '/../../modules/api/v1/'+modules[i]+'/routes/routes'))(app)
	// 	console.log(modules[i]);
	// }

module.exports = router
