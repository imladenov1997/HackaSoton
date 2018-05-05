const express = require('express');
const router = express.Router();
const GameRoom = require("../game/game-room");
const Player = require("../game/player");


let currentGameRooms = {};
const MAX_NUM_PLAYERS = 20;


/* GET home page with options to start/join a game. */
router.get('/', function(req, res, next) {
  //Put any arguments you need here
  res.render('index', { title: 'Warewolves Party Game' });
});

router.post('/create', function(req, res, next) {
  const gameID = getGameRoomCode();
  const playerID = 1;
  //open a socket for the client requesting to create a game (the admin of  the game)
  const socket; //TODO Ivo
  const adminPlayer = Player(playerID, socket);
  const game = GameRoom(adminPlayer, gameID)
  currentGameRooms[gameID] = game;
  //Render view #2
});

router.post('/join:gameID', function(req, res, next) {
  const gameID = req.params.gameID;
  if(currentGameRooms.hasOwnProperty(gameID)) {
    const game = currentGameRooms[gameID];
    const playerID = game.getNextPlayerID();
    //Open a socket for the client
    const socket;
    const player = Player(playerID);
    
  } else {
    //Send an error message to the client
  }
})

function getGameRoomCode() {
  while (currentGameRooms.hasOwnProperty(id)) {
    id = id = Math.floor(1000 + Math.random() * 9000);
  }
  return id;
}


module.exports = router;
