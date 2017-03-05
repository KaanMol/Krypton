/**
* @todo unfinished follow system
*/
'use strict';

var Connection = require('../../models/connection.model');
var Id = require('../../controllers/connection/id.controller');

exports.followRequest = function(req, res) {
  var id = Id.place(req.auth.userID, req.params.id);
  Connection.model
  .find({
    user1: id[0],
    user2: id[1]
  })
  .exec(function (err, connection) {
    if (err) {
      res.status(500).json({message: 'UNEXPECTED_ERROR'});
    } else if (!connection.length){
      res.status(404).json({message: 'CONNECTION_NOT_FOUND'});
    } else {
      connection[0].connection = 11;
      connection[0].save(function(err, success) {
        if ( err && err.code !== 11000 ) {
          res.status(500).json({message: 'UNEXPECTED_ERROR'});
          return;
        }
        res.status(200).json({message: 'SUCCESS'});
      });
    }
  });
}
