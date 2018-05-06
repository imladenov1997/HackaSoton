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

socket.on('playerJoined', function(data) {
    if ($("#player" + data.playerID).length == 0) {
        addPlayerToLobby(data.playerID, data.playerName);
    }
});

let wereAdded = false;
socket.on('getAllPlayers', function(players) {
    if(!wereAdded) {
        addJoinedPlayersToLobby(players);
        wereAdded = true;
    }
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
    $("#player" + msg.playerID).text(msg.newName);
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
    console.log(playerName)
    socket.emit('nameChange', playerName);
}