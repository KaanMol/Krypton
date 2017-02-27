'use strict';
var router = require('express').Router(),
	controller = require('../controllers/controller')

router.post('/login', function(req,res){controller.login(req, res)});

router.post('/register', function(req,res){controller.register(req, res)});

router.get('/protection', function(req,res){controller.protection(req, res)});

router.get('/verify', function(req,res){controller.verify(req, res)});

router.post('/salt', function(req,res){controller.salt(req, res)});

module.exports = router;
