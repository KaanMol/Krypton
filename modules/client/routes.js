'use strict';
var router = require('express').Router();

router.get('/main', function (req, res) {
	res.send('client, bitch')
});

module.exports = router;