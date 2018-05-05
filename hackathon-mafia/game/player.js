module.exports = (function() {
    "use strict";

    const role = {
        0 : "Peasant",
        1 : "Mafia",
        2 : "Healer",
        3 : "Policeman",
        4 : "Serial killer"
    }

    class Player {
        /**
         * Constructor for the GameRoom object
         */
        constructor(playerID, socket) {
            this.id = playerID;
            this.status = undefined;
            this.socket = socket;
        }
    }

    return Player;
}());