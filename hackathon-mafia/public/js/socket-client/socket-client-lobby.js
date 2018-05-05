const socket = io();

socket.on('gameStarts', function(game) {
    console.log("Prepare! Game starts");
    changeName('name');
});

socket.on('playerJoined', function() {
    const msg = 'New Player just entered the lobby';
    console.log(msg);
    console.log(window.location.href);
    changeName('name');
});

// sample for sending json
var sample = {
    gameID: 0,
    playerID: 0,
    page: "lobby/game",
    data: {

    }
};

socket.on('playerChangedName', function(msg) {

});


function changeName(name) {
    const playerName = {
        name: name
    }
    socket.emit('nameChange', playerName);
}