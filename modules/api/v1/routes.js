'use strict';
var router = require('express').Router();

router.use('/auth', require('./auth/routes/routes'));

router.use('/connections', require('./connections/routes/routes'));

router.use('/user', require('./users/routes/routes'));

router.use('/post', require('./post/routes/routes'));

module.exports = router;
