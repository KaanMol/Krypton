'use strict';
var router = require('express').Router();
var controller = require('../controllers/controller');

router.get('/:id', function(req,res){controller.getComments(req, res)});

router.get('/:id/:commentID', function(req,res){controller.getComment(req, res)});

router.post('/:id', function(req,res){controller.createComment(req, res)});

router.delete('/:id', function(req,res){controller.removeComment(req, res)});

router.put('/:id', function(req,res){controller.editComment(req, res)});

module.exports = router;
