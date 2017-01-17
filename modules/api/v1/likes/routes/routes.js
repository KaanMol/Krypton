'use strict';
var router = require('express').Router(),
		controller = require('../controllers/controller')

router.get('/:id', function(req,res){controller.getLikes(req, res)});


module.exports = router;
