socket.on('doctorTime', function(msg) {

});

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