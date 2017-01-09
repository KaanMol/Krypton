'use strict';
var router = require('express').Router(),
	controller = require('../controllers/controller');

router.get('/:id', function(req,res){controller.check(req, res)});

router.get('/add/:id', function(req,res){controller.sendRequest(req, res)});

router.get('/accept/:id', function(req,res){controller.acceptRequest(req, res)});

router.get('/decline/:id', function(req,res){controller.declineRequest(req, res)});

router.get('/remove/:id', function(req,res){controller.removeRequest(req, res)});

router.get('/block/:id', function(req,res){controller.blockRequest(req, res)});

router.get('/follow/:id', function(req,res){controller.followRequest(req, res)});

module.exports = router;
