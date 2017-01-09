'use strict';

var Schema = require('mongoose').Schema,
		postScheme = new Schema({
	userID: {
  		type : String,
  		required : true
  	},
	privacy: {
		type : Number,
		required : true
	},
	post: {
		type : String,
		required : true
	},
  edited: Array,
  posted: Date
});


exports.model = require('mongoose').model('Post', postScheme);
