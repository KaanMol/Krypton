'use strict';
var router = require('express').Router(),
	controller = require('../controllers/controller')

router.post('/login', function(req,res){controller.login(req, res)});

router.post('/register', function(req,res){controller.register(req, res)});

module.exports = router;
