'use strict';
exports.verify = function(req, res) {
	res.send(req.auth);
}
