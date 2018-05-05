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
            this.players = {1: admin};
            this.numPlayers = 1;
        }

        playerJoined(player, playerID) {
            this.players[playerID] = player;
            this.numPlayers++;
        }

        //Each player gets the next possible ID
        getNextPlayerID() {
            this.numPlayers++;
            return this.numPlayers;
        }

        getGameCode() {
            return this.code;
        }

        //Returns an object with players associated with their ids
        getPlayersNames() {
            let allPlayers = {};
        
            for (var key in this.players) {
                if (this.players.hasOwnProperty(key)) {
                    allPlayers[key] = this.players[key].name
                }
            }
            return allPlayers;
        }

    }
    return GameRoom;
}());