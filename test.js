var subdomain = require('express-subdomain');
var express = require('express');
var app = express();

// *** Code examples below go here! ***

// example.com
app.get('/', function(req, res) {
  res.send('Homepage');
});
