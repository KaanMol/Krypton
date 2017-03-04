'use strict';
var router = require('express').Router();
var jwt = require('express-jwt');
var config = require('../../config/config');
var unless = require('express-unless');
var subdomain = require('express-subdomain');
const path = require('path');

// Routes for API version 1
router.use('/v1', require('./v1/routes'));
module.exports = router
