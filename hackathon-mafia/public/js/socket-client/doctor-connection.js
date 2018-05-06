console.log("is doctor");

socket.on('doctorTime', function(msg) {
    navigateTo('main-screen');
    changeStatusMessage("Choose who to heal tonight?");
});

socket.on('sheriffTime', function(msg) {
    navigateTo('sleep-screen');
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