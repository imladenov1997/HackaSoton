console.log('admin started game');
socket.emit("adminStartedGame", {game: gameID});

socket.on('wakeUp', (msg) => {
    let sound = new Audio('/music/villageWakeUp.mp4');
    sound.play();
});

socket.on('fallAsleep', (msg) => {
    let sound = new Audio('/music/villageFallsAsleep.mp4');
    sound.play();
});

socket.on('sheriffTime', (msg) => {
    let sound = new Audio('/music/seerWakeUp.mp4');
    sound.play();
});

socket.on('doctorTime', (msg) => {
    let sound = new Audio('/music/doctorWakeUp.mp4');
    sound.play();
});

socket.on('mafiaTime', (msg) => {
    let sound = new Audio('/music/werewolvesWakeUp.mp4');
    sound.play();
});

socket.on('killed', (msg) => {
    let sound = new Audio('/music/morningNobodyWasKilled.mp4');
    sound.play();
});

socket.on('noOneKilled', (msg) => {
    let sound = new Audio('/music/morningSomeoneWasKilled.mp4');
    sound.play();
});

socket.on('peasantsWin', (msg) => {
    let sound = new Audio('/music/endGameVillagersWin.mp4');
    sound.play();
});

socket.on('mafiaWin', (msg) => {
    let sound = new Audio('/music/endGameWerewolvesWin.mp4');
    sound.play();
});