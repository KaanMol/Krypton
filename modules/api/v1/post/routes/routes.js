'use strict';
var router = require('express').Router(),
		controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.readPost(req, res)});

router.post('/add/', function(req,res){controller.createPost(req, res)});

router.get('/remove/:id', function(req,res){controller.removePost(req, res)});

router.post('/edit/:id', function(req,res){controller.editPost(req, res)});

module.exports = router;
