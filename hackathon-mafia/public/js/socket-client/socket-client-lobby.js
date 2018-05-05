const socket = io();

const initialData = {
    gameID: gameID,
    playerID: playerID,
    page: "lobby",
    data: {}
};

let playersJoined;

socket.emit('playerJoined', initialData);

socket.on('gameStarts', function(game) {
    console.log("Prepare! Game starts");
    changeName('name');
});

socket.on('playerJoined', function() {
    const msg = 'New Player just entered the lobby';
    console.log(msg);
    changeName('name');
});

socket.on('getAllPlayers', function(players) {
    addJoinedPlayersToLobby(players);
});

// sample for sending json
var sample = {
    gameID: gameID,
    playerID: playerID,
    page: "lobby/game",
    data: {

    }
};

socket.on('playerChangedName', function(msg) {

});


function changeName(name) {
    const playerName = {
        gameID: gameID,
        playerID: playerID,
        page: "lobby",
        data: {
            name: name
        }
    }
    socket.emit('nameChange', playerName);
}