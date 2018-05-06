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

socket.on('isMafia', function(msg) {

});

function setReady() {
    const readyPlayerOne = {
        gameID: gameID,
        playerID: playerID,
        page: "game",
        data: {
            ready: 'READY'
        }
    };
    socket.emit('playerReady', readyPlayerOne);
}

function vote(id) {
    const votedPlayer = {
        gameID: gameID,
        playerID: playerID,
        page: "game",
        data: {
            votedPlayerId: id
        }
    };
    socket.emit('vote', votedPlayer);
}

function sheriffVote(id) {
    const checkedPlayer = {
        gameID: gameID,
        playerID: playerID,
        page: "game",
        data: {
            checkedPlayer: id
        }
    };
    socket.emit('sheriffVote', checkedPlayer);
}

function doctorVote(id) {
    const curedPlayer = {
        gameID: gameID,
        playerID: playerID,
        page: "game",
        data: {
            curedPlayer: id
        }
    };
    socket.emit('doctorVote', curedPlayer);
}

function mafiaVote(id) {
    const playerToKill = {
        gameID: gameID,
        playerID: playerID,
        page: "game",
        data: {
            playerToKill: id
        }
    };
    socket.emit('mafiaVote', playerToKill);
}

function fallAsleep() {
    const playerAsleep = {
        gameID: gameID,
        playerID: playerID,
        page: "game",
        data: {
            isSleeping: true
        }
    };
    socket.emit('playerAsleep', playerAsleep);
}