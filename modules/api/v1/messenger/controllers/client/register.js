var clients = {};
module.exports = {
  add: function(id, socket) {
    console.log(clients.length);
    clients[id] = socket;
  },

  get: function(id) {
    console.log(clients.length);
    return clients[id];
  },

  remove: function() {

  },

  update: function() {

  }
}
