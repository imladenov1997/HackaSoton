let base = new URL(window.location.origin);

$("#room-join-button").click(function() {
    window.location.href = new URL("/room/" + $("#room-code-input").val(), base);
});

// $("#room-create-button").click(function() {
//     window.location.href = new URL("/create", base);
// });