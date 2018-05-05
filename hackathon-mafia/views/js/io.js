var io = require('socket.io-client');

var socket = io();
socket.emit('nameChange', {});
socket.on('gameStarts', function(game) {
    console.log("Prepare! Game starts");
});

module.exports = socket;