'use strict';
var router = require('express').Router(),
		controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.readPost(req, res)});

router.post('/', function(req,res){controller.createPost(req, res)});

router.delete('/:id', function(req,res){controller.removePost(req, res)});

router.put('/:id', function(req,res){controller.editPost(req, res)});

module.exports = router;
