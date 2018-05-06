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

    const rolesInfo = {
        werewolf: {
            id: 0,
            displayName: "Werewolf",
            scriptName: "werewolf",
            description: "Kills during the night"
        },
        doctor: {
            id: 1,
            displayName: "Doctor",
            scriptName: "doctor",
            description: "The good guy who heals people"
        },
        seer: {
            id: 2,
            displayName: "Seer",
            scriptName: "seer",
            description: "Can check if a player is a werewolf"
        },
        peasant: {
            id: 3,
            displayName: "Peasant",
            scriptName: "peasant",
            description: "Just a peasant"
        }
    }

    class Player {
        /**
         * Constructor for the GameRoom object
         */
        constructor(playerID, socket) {
            this.id = playerID;
            this.status = 'NOT_READY';
            this.socket = socket;
            let firstNameRnd = Math.floor(Math.random() * (firstNames.length - 1));
            let lastNameRnd = Math.floor(Math.random() * (lastNames.length - 1));
            this.name = firstNames[firstNameRnd] + " " + lastNames[lastNameRnd];
            
        }

        changeName(newName) {
            this.name = newName;
        }

        assignRole(role) {
            this.role = rolesInfo[role];
        }
        setStatus(status) {
            this.status = status;
        }
    }

    return Player;
}());