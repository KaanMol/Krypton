'use strict';

var Connection = require('../../models/connectionModel'),
		Id = require('../../controllers/connection/idPlacement');

exports.pendingRequests = function (req, res) {
  Connection.model
    .find({
      receiver: req.auth.userID,
      connection: 0
    })
    .exec(function (err, requests){
      if (err) {
        res.json({
          statusCode: 4
        });
      } else if (!requests.length) {
        res.json({
          statusCode: 4
        });
      } else {
        res.send(requests);
      }
    });
}
