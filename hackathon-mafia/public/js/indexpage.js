$("#room-join-button").click(function() {
    var base = new URL(window.location.origin);
    window.location.href = "/room/" + $("#room-code-input").val();
});