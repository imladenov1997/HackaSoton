let base = new URL(window.location.origin);

$("#room-join-button").click(function() {
    const gameID = $("#room-code-input").val();
    let url = new URL("/getPlayerID/" + gameID, base);
    $.post(url, (id) => {
        //Get the lobby page
        console.log("Client got his id");
        let lobbyUrl = new URL("/join/" + gameID + "/" + id, base);
        window.location.href = lobbyUrl;
    });
});

$("#start-game-button").click(function() {
    window.location.href = new URL("/inprogress/" + "1001", base);
});

 $("#room-create-button").click(function() {
     let playerID, gameCode;
     $.post('/create', (gameInfo) => {
        playerID = gameInfo["playerID"];
        gameCode = gameID["gameID"];
     });
     window.location.href = new URL("/create", base);
 });