$(".game-clock").FlipClock(3000, {
    countdown: true,
    clockFace: 'MinuteCounter',
});

function hideAllScreens() {
    $(".ascreen").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });
}

hideAllScreens();

const activeScreen = 'ready-screen';

function navigateTo(screen) {
    hideAllScreens();
    $("#" + screen).removeClass('hidden');
}

let peasants = [0, 1, 2, 3, 4, 5];
navigateTo(activeScreen);

$("#ready-button").click(function() {
    setReady();
    $("#ready-button")
        .removeClass("btn-outline-secondary")
        .addClass("btn-success");
});

$("#sleep-touch-area").click(function() {
    $("#open-eye-svg").addClass("hidden");
    $("#closed-eye-svg").removeClass("hidden");
    $("#sleep-info").text("You should be asleep.");
    fallAsleep();
});