socket.on('sheriffTime', function(msg) {

});

socket.on('isMafia', function(msg) {

});

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