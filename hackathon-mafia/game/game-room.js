module.exports = (function() {
    "use strict";

    const gameStatus = {
        0 : "Not initiated",
        1 : "Lobby",
        2 : "ConfirmedPlayers"
    }

    class GameRoom {
        /**
         * Constructor for the GameRoom object
         */
        constructor(admin, code) {
            this.admin = admin;
            this.code =  code;
            this.status = 0;
            this.players = {};
            this.nextPlayerID = 1;
        }

        playerJoined(player) {
            this.players[playerID] = player;
        }

        //Each player gets the next possible ID
        getNextPlayerID() {
            return this.nextPlayerID++;
        }
    }

    return GameRoom;
}());