const socket = io();
let alive = true;

socket.on('allReady', function(msg) {
    navigateTo("sleep-screen");
});

socket.on('removeRoleScreen', function(msg) {

});

socket.on('allAsleep', function(msg) {

});

socket.on('voteFinished', function(data) {
    console.log('vote voteFinished');
    changeStatusMessage(data.playerName + " was lynched by the town.");
});

socket.on('wakeUp', function(msg) {
    if (alive) {
        // console.log(msg.playerKilled);
        // console.log(playerID);
        if (playerID === msg.playerKilled) {
            navigateTo("death-screen");
            alive = false;
        } else {
            showVotedDisplays();
            showClock();
            navigateTo("main-screen");
            setFlipClockTime(30);
            changeStatusMessage(msg.playerName + " was killed tonight.");
        }
    }
});

socket.on('dayTime', function(msg) {

});

socket.on('voteTime', function(msg) {

});

socket.on('playerVoted', function(msg) {
    if (alive) {
        console.log('change update');
        console.log(msg.voteByID);
        $("#" + msg.data.voteById + "-voted-display").text("Voted for " + msg.voteForName);
    }
});

socket.on('fallAsleep', function(msg) {
    console.log('fall asleep');
    if (alive) {
        navigateTo("sleep-screen");
        console.log('fallen asleep');
    }
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
    console.log(votedPlayer);
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