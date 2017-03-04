'use strict';
var router = require('express').Router(),
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

module.exports = router
