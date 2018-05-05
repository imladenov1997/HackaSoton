const socket = io();

socket.emit('nameChange', {});

socket.on('gameStarts', function(game) {
    console.log("Prepare! Game starts");
    changeName('name');
});

socket.on('playerJoined', function() {
    const msg = 'New Player just entered the lobby';
    console.log(msg);
    changeName('name');
});


socket.on('playerChangedName', function(msg) {

});

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

function changeName(name) {
    const playerName = {
        name: name
    }
    socket.emit('nameChange', playerName);
}

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