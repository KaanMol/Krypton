'use strict';
var router = require('express').Router();

router.use('/auth', require('./auth/routes/routes'));

router.use('/user', require('./users/routes/routes'));

module.exports = router;
