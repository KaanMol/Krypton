'use strict';

var Connection = require('../../models/connection.model'),
		Id = require('../../controllers/connection/id.controller');

exports.pendingRequests = function (req, res) {
  Connection.model
    .find({
      receiver: req.auth.userID,
      connection: 0
    })
    .exec(function (err, requests){
      if (err) {
        res.status(500).json({message: 'UNEXPECTED_ERROR'});
      } else if (!requests.length) {
        res.status(404).json({message: 'CONNECTION_NOT_FOUND'});
      } else {
        res.send(requests);
      }
    });
}
