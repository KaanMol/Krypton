'use strict';
var router = require('express').Router();
var controller = require('../controllers/controller');

router.get('/users/:id', function(req,res){controller.profile(req, res)});
router.get('/picture/:id', function(req,res){controller.picture(req, res)});

module.exports = router;
