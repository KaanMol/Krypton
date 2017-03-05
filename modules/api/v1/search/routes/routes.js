'use strict';
var router = require('express').Router();
var controller = require('../controllers/controller');

router.post('/username', function(req,res){controller.username(req, res)});

module.exports = router;
