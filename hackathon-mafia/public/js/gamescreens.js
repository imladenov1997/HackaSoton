$(".game-clock").FlipClock(20, {
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
    resetSleepScreen();
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
    if(!$("#sleep-screen").hasClass("hidden")) {
        $("#open-eye-svg").addClass("hidden");
        $("#closed-eye-svg").removeClass("hidden");
        $("#sleep-info").text("You should be asleep.");
        fallAsleep();
    }
});

function resetSleepScreen() {
    $("#open-eye-svg").removeClass("hidden");
    $("#closed-eye-svg").addClass("hidden");
    $("#sleep-info").text("Touch screen when you are asleep.");
}



function setActive(selectedOption) {
    deselectAll();
    selectedOption.classList.add('active');
    selectedOption.style.backgroundColor="grey";
    // selectedOption.style.borderColor("black");
}

$("villagePeople").each(() => {
    $(this).click(() => {
        setActive($(this));
    });
});

function deselectAll() {
    // Get all elements with "active" class
    var els = document.getElementsByClassName("villagePeople active");

    // Loop over Elements to remove active class;
    for (var i = 0; i < els.length; i++) {
        els[i].style.backgroundColor="white";
        els[i].classList.remove("active");
        els[i].style.borderColor("white");
    }
}

$(".vote-control").each(function () {
    let id = $(this).attr('id');
    $(this).click(() => {
        vote(id);
    });
});

function changeStatusMessage(message) {
    console.log('changed message to ' + message);
    $('#status-message-h').text(message);
}