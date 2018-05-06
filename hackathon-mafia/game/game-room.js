module.exports = (function() {
    "use strict";


    const specialCharacters = [
        "doctor",
        "seer"
    ]

    class GameRoom {
        /**
         * Constructor for the GameRoom object
         */
        constructor(admin, code) {
            this.admin = admin;
            this.code =  code;
            this.status = "INIT";
            this.players = {1: admin};
            this.numPlayers = 2;
            this.votes = {};
            this.elected = {};
            this.elections = {
                votes: {},
                elected: {},
                length: 0
            };
            this.playersAsleep = 0;
            this.playerKilledByMafia;
            this.playerHealed;
            this.numOfMafia = 0;
        }

        playerJoined(player, playerID) {
            this.players[playerID] = player;
        }

        allPlayersAsleep() {
            return this.playersAsleep === this.numPlayers;
        }

        //Each player gets the next possible ID
        getNextPlayerID() {
            this.numPlayers += 1;
            return this.numPlayers;
        }

        getGameCode() {
            return this.code;
        }

        //Returns an object with players associated with their ids
        getPlayersNames() {
            let allPlayers = {};
        
            for (let key in this.players) {
                if (this.players.hasOwnProperty(key)) {
                    allPlayers[key] = this.players[key].name;
                }
            }
            return allPlayers;
        }

        getPlayersList() {
            const playersList = [];
            let i = 0;
            for (let player in this.players) {
                if (players.hasOwnProperty(player)) {
                    playersList[i] = {
                        playerID: this.players[player].id,
                        playerName: this.players[player].name
                    };
                    i += 1;
                }

            }
            return playersList;
        }

        // vote during the day
        addVote(voter, voted) {
            this.elections.length = this.elections.votes[voter] === undefined ? this.elections.length + 1 : this.elections.length;
            this.elections.votes[voter] = voted;
        }

        getNightOutcome() {
            if(this.playerHealed === this.playerKilledByMafia) {
                this.playerKilledByMafia = 0;
            }
            return {playerKilled: this.playerKilledByMafia};
        }

        getNightOutcome() {
            return "";
        }

        // count votes during the day
        countVotes() {
            if (this.alive === this.elections.length) {
                for (let key in votes) {
                    if (this.elections.elected[this.elections.votes[key]] !== undefined) {
                        this.elections.elected[this.elections.votes[key]]++;
                    } else {
                        this.elections.elected[this.elections.votes[key]] = 1;
                    }
                }

                let maxVotesId = -1;

                for (let keyElected in this.elections.elected) {
                    if (this.elections.elected[maxVotesId] === undefined || this.elections.elected[keyElected] > this.elections.elected[maxVotesId]) {
                        maxVotesId = keyElected;
                    }
                }

                // reset votes for next round
                this.elections = {
                    votes: {},
                    elected: {},
                    length: 0
                };

                if (maxVotesId !== -1) {
                    let result = this.kill(maxVotesId);
                    if (result !== 0) {
                        this.gameOver = result;
                    }
                }

                return maxVotesId; // return the killed person (-1 for no one was killed)
            }

            return -2; // not all people have voted
        }

        // kill someone during the day
        kill(id) {
            this.players[id].setStatus('DEAD');
            this.alive--;

            if (this.players[id].role === 'Werewolf' || this.players[id].role === 'Alpha Wolf') {
                this.numOfMafia--;
            }

            if (this.numOfMafia === 0) {
                return 1; // peasants win
            } else if (this.numOfMafia >= this.alive - this.numOfMafia) {
                return -1; // mafia wins
            } else {
                return 0; // no one wins
            }
        }

        

        initialize() {
            //Assigning of roles
            let playersIDs = Object.keys(this.players);
            playersIDs.sort(function(a, b){return 0.5 - Math.random()});
            let i = 0;
            playersIDs.forEach(element => {
                if(i < specialCharacters.length) {
                    this.players[element].assignRole(specialCharacters[i]);
                } else if(i%3 == 0) {
                    this.players[element].assignRole("werewolf");
                    this.numOfMafia += 1;
                } else {
                    this.players[element].assignRole("peasant");
                }
                i += 1;
            });
            this.alive = this.numPlayers - 1;
        }

    }
    return GameRoom;
}());