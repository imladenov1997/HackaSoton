const socket = io();

socket.on('allReady', function(msg) {
    navigateTo("main-screen");
});

socket.on('removeRoleScreen', function(msg) {

});

socket.on('allAsleep', function(msg) {

});

socket.on('voteFinished', function(data) {
    if (data.playerID !== -1) {
        changeStatusMessage(data.playerName + " was lynched by the town.");
    }
});

socket.on('wakeUp', function(msg) {
    if (msg === -1) {
        // no one was killed
    } else if (playerID === msg) {
        // sorry, man, you were killed
    }
});

socket.on('dayTime', function(msg) {

});

socket.on('voteTime', function(msg) {

});

socket.on('playerVoted', function(msg) {

});

socket.on('fallAsleep', function(msg) {
    navigateTo("sleep-screen");
    console.log('fallen asleep');
});

socket.on('peasantsWin', (msg) => {
    // Timmy, please implement some kind of a pop-up that result in showing that peasants win :)
});

socket.on('mafiaWin', (msg) => {
    // Timmy, please implement some kind of a pop-up that result in showing that peasants win :)
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