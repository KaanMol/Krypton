'use strict';

var Schema = require('mongoose').Schema,
	chatScheme = new Schema({
		senderID: {
  		type : String,
  		required : true
  	},
  	receiverID: {
  		type : String,
  		required : true
  	},
		message: {
			type: String,
			required : true
		}
});

exports.model = require('mongoose').model('Messenger_Chats', chatScheme);
