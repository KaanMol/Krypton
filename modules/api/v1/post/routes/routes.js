'use strict';
var router = require('express').Router();
var controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.byPostId(req, res)});
router.get('/user/:id', function(req,res){controller.byUser(req, res)});
router.post('/', function(req,res){controller.create(req, res)});
router.post('/:id', function(req,res){controller.createTo(req, res)});
router.delete('/:id', function(req,res){controller.remove(req, res)});
router.put('/:id', function(req,res){controller.edit(req, res)});

module.exports = router;
