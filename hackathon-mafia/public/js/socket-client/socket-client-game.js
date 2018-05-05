const socket = io();

socket.on('allReady', function(msg) {

});

socket.on('removeRoleScreen', function(msg) {

});

socket.on('allAsleep', function(msg) {

});

socket.on('sheriffTime', function(msg) {

});

socket.on('doctorTime', function(msg) {

});

socket.on('mafiaTime', function(msg) {

});

socket.on('wakeUp', function(msg) {

});

socket.on('dayTime', function(msg) {

});

socket.on('voteTime', function(msg) {

});

socket.on('playerVoted', function(msg) {

});

function setReady() {
    socket.emit('playerReady');
}

function vote() {
    socket.emit('vote');
}

function sheriffVote() {
    socket.emit('sheriffVote');
}

function doctorVote(){
    socket.emit('doctorVote');
}

function mafiaVote() {
    socket.emit('mafiaVote');
}

function fallAsleep() {
    socket.emit('playerAsleep');
}