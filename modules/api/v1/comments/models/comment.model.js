'use strict';

var Schema = require('mongoose').Schema;
var commentScheme = new Schema({
  userID: {
    type : String,
    required : true
  },
  postID: {
    type : String,
    required : true
  },
  post: {
    type : String,
    required : true
  },
  edited: Array,
  created: Number
});

exports.model = require('mongoose').model('Comment', commentScheme);
