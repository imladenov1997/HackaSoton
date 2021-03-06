let base = new URL(window.location.origin);

$("#room-join-button").click(function() {
    const gameID = $("#room-code-input").val();
    let url = new URL("/getPlayerID/" + gameID, base);
    $.post(url, (data) => {
        //Get the lobby page
        console.log("Client got his id");
        let lobbyUrl = new URL("/join/" + data.game + "/" + data.player, base);
        window.location.href = lobbyUrl;
    });
});

$("#start-game-button").click(function() {
    window.location.href = new URL("/inprogress/" + gameID + "/" + playerID, base);
});

$("#room-create-button").click(function() {
    $.post(new URL("/create", base), (data) => {
        console.log('create')
        let lobbyUrl = new URL("/join/" + data.game + "/" + data.player, base);
        window.location.href = lobbyUrl;
    });
});

$("#player-name-change").click(function() {
    let newName = $("#player-name-input").val();
    changeName(newName);
    $("#your-name-span").text(newName);
});


function addJoinedPlayersToLobby(players) {
    console.log(players);
    Object.keys(players).forEach(function(key, index) {
        addPlayerToLobby(key, players[key]);
    });
}

function addPlayerToLobby(pid, pname) {
    $("#joined-players-list")
            .append($('<li class="list-group-item" id="player' + pid + '">' + pname + '</li>'));
}