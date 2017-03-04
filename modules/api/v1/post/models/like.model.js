'use strict';

var Schema = require('mongoose').Schema;
var postScheme = new Schema({
  userID: {
    type : String,
    required : true
  },
  postID: {
    type : String,
    required : true
  },
  typeLike: {
    type : Number,
    required : true
  }
});

exports.model = require('mongoose').model('Post', postScheme);
