'use strict';
var router = require('express').Router();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(function(req, res, next) {
  if (req.subdomains.length == 1 && req.subdomains[0] == "developers") {
    req.url = "/api" + req.originalUrl
  } else if (req.subdomains.length == 0) {
    req.url = "/client" + req.originalUrl
  }
  next();
});
router.use('/client/modules', express.static(path.join(__dirname, '../../modules/client')));
router.all('/client', function(req, res) {
  res.sendFile(path.join(__dirname, '../../modules/client/index.html'));
});
router.use('/api', require('../../modules/api/routes'));

module.exports = router
