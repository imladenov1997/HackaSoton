console.log("is doctor");

socket.on('doctorTime', function(msg) {
    navigateTo('main-screen');
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