console.log('admin started game');
socket.emit("adminStartedGame", {game: gameID});

socket.on('wakeUp', (msg) => {
    let sound = new Audio('/music/villageWakeUp.m4a');
    sound.play();
});

socket.on('fallAsleep', (msg) => {
    let sound = new Audio('/music/villageFallsAsleep.m4a');
    sound.play();
});

socket.on('sheriffTime', (msg) => {
    let sound = new Audio('/music/seerWakeUp.m4a');
    sound.play();
});

socket.on('doctorTime', (msg) => {
    let sound = new Audio('/music/doctorWakeUp.m4a');
    sound.play();
});

socket.on('mafiaTime', (msg) => {
    let sound = new Audio('/music/werewolvesWakeUp.m4a');
    sound.play();
});

socket.on('killed', (msg) => {
    let sound = new Audio('/music/morningSomeoneWasKilled.m4a');
    sound.play();
});

socket.on('noOneKilled', (msg) => {
    let sound = new Audio('/music/morningNobodyWasKilled.m4a');
    sound.play();
});

socket.on('peasantsWin', (msg) => {
    let sound = new Audio('/music/endGameVillagersWin.m4a');
    sound.play();
});

socket.on('mafiaWin', (msg) => {
    let sound = new Audio('/music/endGameWerewolvesWin.m4a');
    sound.play();
});