socket.on('mafiaTime', function(msg) {

});

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