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
            this.numPlayers = 2;
            this.votes = {};
            this.elected = {};
            this.elections = {
                votes: {},
                elected: {},
                length: 0
            };
            this.mafiaElections = {
                votes: {},
                elected: {},
                length: 0
            };
            this.numOfMafia = 0;
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
        
            for (let key in this.players) {
                if (this.players.hasOwnProperty(key)) {
                    allPlayers[key] = this.players[key].name;
                }
            }
            return allPlayers;
        }

        // vote during the day
        addVote(voter, voted) {
            this.elections.length = this.elections.votes[voter] === undefined ? this.elections.length + 1 : this.elections.length;
            this.elections.votes[voter] = voted;
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
                    this.kill(maxVotesId);
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

            return (this.numOfMafia >= this.alive - this.numOfMafia || this.numOfMafia === 0); // returns true if the game has finished
        }

        //TO BE CHANGED
        addMafiaVote(voter, voted) {
            if (this.players[voter].role === 'Werewolf' || this.players[id].role === 'Alpha Wolf') {
                // this.mafiaElections.length = this.mafiaElections.votes[voter] === undefined ?
                this.mafiaElections.votes[voter] = voted;

            }
        }

        // TO BE CHANGED
        countMafiaVotes() {
            if (this.numOfMafia === this.mafiaElections.length) {
                for (let key in votes) {
                    if (this.mafiaElections.elected[this.mafiaElections.votes[key]] !== undefined) {
                        this.mafiaElections.elected[this.mafiaElections.votes[key]]++;
                    } else {
                        this.mafiaElections.elected[this.mafiaElections.votes[key]] = 1;
                    }
                }

                let maxVotesId = -1;

                for (let keyElected in this.elections.elected) {
                    if (this.mafiaElections.elected[maxVotesId] === undefined || this.mafiaElections.elected[keyElected] > this.mafiaElections.elected[maxVotesId]) {
                        maxVotesId = keyElected;
                    }
                }

                // reset votes for next round
                this.mafiaElections = {
                    votes: {},
                    elected: {},
                    length: 0
                };

                if (maxVotesId !== -1) {
                    this.kill(maxVotesId);
                }

                return maxVotesId; // return the killed person (-1 for no one was killed)
            }

            return -2; // not all of the mafia have voted
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
                    this.players[element].assignRole("Werewolf");
                    this.numOfMafia += 1;
                } else {
                    this.players[element].assignRole("Peasant");
                }
                i += 1;
            });
            this.alive = this.numPlayers - 1;
        }

    }
    return GameRoom;
}());