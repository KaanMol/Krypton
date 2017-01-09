'use strict';
var router = require('express').Router(),
		controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.profile(req, res)});

router.post('/add/', function(req,res){controller.createPost(req, res)});

router.get('/remove/:id', function(req,res){controller.profile(req, res)});

router.post('/edit/:id', function(req,res){controller.profile(req, res)});
module.exports = router;
