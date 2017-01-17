'use strict';
var express = require('express'),
	app = express(),
	config = require('../config'),
	mongoose = require('mongoose');
const path = require('path');
mongoose.Promise = global.Promise;

//Connect to the database
mongoose.connect('mongodb://'+config.host+'/'+config.appName);

exports.start = function() {

	if(config.hostType = "local") {
		app.set('subdomain offset', 1);
	}


	app.use('/', require('./route'));

	app.listen(config.port,config.host, function () {
  		console.log('%s services are online at %s://%s:%s', config.appName, config.webProtocol, config.host, config.port);
	});
};
