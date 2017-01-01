'use strict';
var router = require('express').Router(),
	controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.profile(req, res)});

// router.post('/register', function(req,res){controller.register(req, res)});

module.exports = router;