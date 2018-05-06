module.exports = (function() {
    "use strict";

    const gameStatus = {
        0 : "Not initiated",
        1 : "Lobby",
        2 : "ConfirmedPlayers"
    };

    const specialCharacters = [
        "Doctor",
        "Seer"
    ]

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
                    allPlayers[key] = this.players[key].name;
                }
            }
            return allPlayers;
        }

        initialize() {
            //Assigning of roles
            let playersIDs = this.players.keys();
            playersIDs.sort(function(a, b){return 0.5 - Math.random()});
            let i = 0;
            playersIDs.forEach(element => {
                if(i < specialCharacters.length - 1) {
                    this.players[element].assignRole(specialCharacters[parseInt(element)]);
                } else if(i%3 == 0) {
                    this.players[element].assignRole("Warewolf");
                } else {
                    this.players[element].assignRole("Peasant");
                }
            });
        }

    }
    return GameRoom;
}());