socket.on('mafiaTime', function(msg) {
    navigateTo("main-screen");
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