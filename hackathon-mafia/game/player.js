module.exports = (function() {
    "use strict";

    const role = {
        0 : "Peasant",
        1 : "Mafia",
        2 : "Healer",
        3 : "Policeman",
        4 : "Serial killer"
    }

    const firstNames = [
        "Atanas",
        "Ivo",
        "Vezi",
    ];

    const lastNames = [
        "Procktor",
        "Blah",
        "Blah Blah"
    ];

    class Player {
        /**
         * Constructor for the GameRoom object
         */
        constructor(playerID, socket) {
            this.id = playerID;
            this.status = undefined;
            this.socket = socket;
            let firstNameRnd = Math.floor(Math.random() * 2);
            let lastNameRnd = Math.floor(Math.random() * 2);
            this.name = firstNames[firstNameRnd] + " " + lastNames[lastNameRnd];
            
        }

        changeName(newName) {
            this.name = newName;
        }
    }

    return Player;
}());