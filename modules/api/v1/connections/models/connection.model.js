'use strict';

var Schema = require('mongoose').Schema;
var connectionScheme = new Schema({
  user1: {
    type : String,
    required : true
  },
  user2: {
    type : String,
    required : true
  },
  connection: {
    type : Number,
    required : true
  },
  sender: String,
  receiver: String,
  connectedSince: 0
});

exports.model = require('mongoose').model('Connection', connectionScheme);
