console.log("is werefold");

socket.on('mafiaTime', function(msg) {
    if (alive) {
        hideVotedDisplays();
        hideClock();
        navigateTo("main-screen");
        changeStatusMessage("Who are the werewolfs going to ravage to death tonight?");
    }
});

socket.on('doctorTime', function(msg) {
    navigateTo("sleep-screen");
    closeEyes();
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