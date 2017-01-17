'use strict';
var router = require('express').Router();
const path = require('path');
router.get('/', function (req, res) {
	res.sendFile(path.resolve("./modules/client/core/view/page_view.html"));
});

module.exports = router;
