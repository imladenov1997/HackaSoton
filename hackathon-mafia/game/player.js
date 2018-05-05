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
        "Alexander",
        "John",
        "Stoyan",
        "Harry",
        "Star",
        "Nicola",
        "Elon",
        "Paul",
        "Hermione",
        "Tess"
    ];

    const lastNames = [
        "Proctor",
        "Blah",
        "Blah Blah",
        "Smith",
        "Brown",
        "Rosaniu",
        "Johnes",
        "Hilbert",
        "Harper",
        "Potter",
        "Whisley",
        "Grainger",
        "Tesla",
        "Musk"
    ];

    class Player {
        /**
         * Constructor for the GameRoom object
         */
        constructor(playerID, socket) {
            this.id = playerID;
            this.status = undefined;
            this.socket = socket;
            let firstNameRnd = Math.floor(Math.random() * (firstNames.length - 1));
            let lastNameRnd = Math.floor(Math.random() * (lastNames.length - 1));
            this.name = firstNames[firstNameRnd] + " " + lastNames[lastNameRnd];
            
        }

        changeName(newName) {
            this.name = newName;
        }
    }

    return Player;
}());