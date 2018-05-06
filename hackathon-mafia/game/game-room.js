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
            for(let i = 0; i < this.numPlayers - 1; i++) {
                if(this.players.hasOwnProperty(i)) {
                    allPlayers[i] = this.players[i].name;
                }
            }
            return allPlayers;
        }

    }
    return GameRoom;
}());