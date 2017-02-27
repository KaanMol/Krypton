'use strict';
var express = require('express'),
	app = express(),
	config = require('../config'),
	mongoose = require('mongoose'),
	https = require('https'),
	fs = require('fs'),
	http = require('http'),
	net = require('net'),
	messenger = require('../../modules/api/v1/messenger/request'),
	path = require('path');

var privateKey  = fs.readFileSync('./config/cert/kaan_nodeJS.key', 'utf8'),
		certificate = fs.readFileSync('./config/cert/kaan_nodeJS.crt', 'utf8'),
		credentials = { key: privateKey, cert: certificate };

mongoose.Promise = global.Promise;

//Connect to the database
mongoose.connect('mongodb://'+config.host+'/'+config.appName);

exports.start = function() {

	app.use('/', require('./route'));


net.createServer(function(socket) {messenger.controller(socket)}).listen(9752);
http.createServer(app).listen(80);
https.createServer(credentials, app).listen(443);
console.log("Server ONLINE");
};
