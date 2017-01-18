'use strict';
var express = require('express'),
	app = express(),
	config = require('../config'),
	mongoose = require('mongoose'),
	https = require('https'),
	fs = require('fs');
const path = require('path');

var privateKey  = fs.readFileSync('./config/cert/kaan_nodeJS.key', 'utf8'),
		certificate = fs.readFileSync('./config/cert/kaan_nodeJS.crt', 'utf8'),
		credentials = { key: privateKey, cert: certificate };

mongoose.Promise = global.Promise;

//Connect to the database
mongoose.connect('mongodb://'+config.host+'/'+config.appName);

exports.start = function() {

	if(config.hostType = "local") {
		app.set('subdomain offset', 1);
	}


	app.use('/', require('./route'));
https.createServer(credentials, app).listen(443);
};
