'use strict';
var router = require('express').Router();
var controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.byPostId(req, res)});
router.get('/user/:id', function(req,res){controller.byUser(req, res)});
router.post('/', function(req,res){controller.createPostTo(req, res)});
router.delete('/:id', function(req,res){controller.removePost(req, res)});
router.put('/:id', function(req,res){controller.editPost(req, res)});

module.exports = router;
