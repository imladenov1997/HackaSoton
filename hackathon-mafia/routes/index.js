const express = require('express');
const router = express.Router();
const io = require('socket.io');
const GameRoom = require("../game/game-room");
const Player = require("../game/player");

let currentGameRooms = {};
const MAX_NUM_PLAYERS = 20;


/* GET home page with options to start/join a game. */
router.get('/', function(req, res, next) {
  //Put any arguments you need here
  res.render('index', { title: 'Warewolves Party Game' });
});

router.get('/create', function(req, res, next) {
  const gameID = getGameRoomCode();
  const playerID = 1;
  const adminPlayer = new Player(playerID);
  const game = new GameRoom(adminPlayer, gameID)
  currentGameRooms[gameID] = game;
  //Render the lobby page and send back the admin his id
  res.send("Game code " + game.getGameCode());
});

router.get('/join/:gameID', function(req, res, next) {
  const gameID = req.params.gameID;
  if(currentGameRooms.hasOwnProperty(gameID)) {
    const game = currentGameRooms[gameID];
    const playerID = game.getNextPlayerID();
    const player = new Player(playerID);
    res.send("Joined room " + gameID + "\nPlayer ID" + playerID);
    //Send back the client ID
  } else {
    res.send("No such room");
  }
})



//Generate a game room code
function getGameRoomCode() {
  id = id = Math.floor(1000 + Math.random() * 9000);
  while (currentGameRooms.hasOwnProperty(id)) {
    id = id = Math.floor(1000 + Math.random() * 9000);
  }
  return id;
}

module.exports = {
  appRouter: router,
  gameRooms: currentGameRooms,
};