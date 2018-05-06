console.log("is sherif");

socket.on('sheriffTime', function(msg) {
    navigateTo("main-screen");
    changeStatusMessage("Who's identity are you going to reveal tonight?");
});

socket.on('isMafia', function(msg) {
    if (msg.data.isMafia) {
        changeStatusMessage("The person you revealed is a Werewolf.");
    } else {
        changeStatusMessage("You did not reveal a Werewolf.");
    }
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