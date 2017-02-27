var socket = require('net');
var receiver = {};
var register = require('../controllers/client/register');

var self = module.exports = {
  controller: function (socket) {
    console.log(socket);
    socket.on('data', function (data) {console.log("incoming: " + data.toString());self.parser(socket, data.toString());});

    socket.on('end', socket.end);
  },

  parser: function(socket, data) {
    console.log(data);
    // var data = JSON.parse(data);
    // if (data.ID == null) {
    //   socket.end;
    // } else {
    //   if (register.get(data.ID) == null) {
    //     register.add(data.ID, socket);
    //   }
    //   if (data.command == "send") self.send(data);
    //
    // }
  },

  UDPSocket: function (message, port, host) {
    var dgram = require('dgram');
    var client = dgram.createSocket('udp4');
    client.send(message, 0, message.length, port, host, function(err, bytes) {
      if (err) throw err;
      console.log('UDP message "'+ message + '" sent to ' + host +':'+ port);
      client.close();
    });
  },

  send: function(data) {
    var message = new Buffer(data.message);

    // if (receiver[data.receiver] == null ||
    //     receiver[data.receiver] != {host:data.host, port: data.port}) {
    //   receiver[data.ID] = {host:data.host, port: data.port};
    // }

    var conUDP = new self.UDPSocket(data.message, data.port, data.host);



    var chat = require('../models/chatScheme');

    var createMes = new chat.model({
      senderID: data.ID,
      receiverID: data.receiver,
      message: data.message
    });

    createMes.save(function(err, test) {
      if ( err && err.code !== 11000 ) {
        console.log(err);
        console.log(err.code);
        return;
      }
    });
  }
}
