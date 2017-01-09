'use strict';
var router = require('express').Router(),
	controller = require('../controllers/controller');

router.get('/:id', function(req,res){controller.getComments(req, res)});

module.exports = router;
