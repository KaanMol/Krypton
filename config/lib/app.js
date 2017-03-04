'use strict';
var express = require('express');
var app = express();
var config = require('../config');
var mongoose = require('mongoose');
var https = require('https');
var fs = require('fs');
var http = require('http');
var net = require('net');
var messenger = require('../../modules/api/v1/messenger/request');
var path = require('path');

var privateKey  = fs.readFileSync('./config/cert/kaan_nodeJS.key', 'utf8');
var certificate = fs.readFileSync('./config/cert/kaan_nodeJS.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };

mongoose.Promise = global.Promise;

//Connect to the database
mongoose.connect('mongodb://'+config.host+'/'+config.appName);

exports.start = function() {
  app.use('/', require('./route'));

  net.createServer(function(socket) {
    messenger.controller(socket);
  }).listen(9752);
  http.createServer(app).listen(80);
  https.createServer(credentials, app).listen(443);
  console.log("Server ONLINE");
};
