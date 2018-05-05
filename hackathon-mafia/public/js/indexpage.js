let base = new URL(window.location.origin);

$("#room-join-button").click(function() {
    window.location.href = new URL("/join/" + $("#room-code-input").val(), base);
});

$("#start-game-button").click(function() {
    window.location.href = new URL("/inprogress/" + "1001", base);
});

// $("#room-create-button").click(function() {
//     window.location.href = new URL("/create", base);
// });