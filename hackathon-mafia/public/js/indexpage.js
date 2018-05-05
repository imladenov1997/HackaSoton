let base = new URL(window.location.origin);
$("#room-join-button").click(function() {
    const gameID = $("#room-code-input").val();
    let url = new URL("/getPlayerID/" + gameID, base);
    $.post(url, (id) => {
        //Get the lobby page
        console.log("Client got his id")
        window.location.href = new URL("/join/?game="+gameID)
        $.get('/join/', {game: gameID, player: id} );
        console.log("Client should have rendered")
    })

});

// $("#room-create-button").click(function() {
//     window.location.href = new URL("/create", base);
// });