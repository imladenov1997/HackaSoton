const express = require('express');
const router = express.Router();
const GameRoom = require("../game/game-room");
const Player = require("../game/player");


let currentGameRooms = {};


/* GET home page with options to start/join a game. */
router.get('/', function(req, res, next) {
  //Put any arguments you need here
  res.render('index', { title: 'Warewolves Party Game' });
});

router.post('/create', function(req, res, next) {
  const gameID = Math.floor(1000 + Math.random() * 9000);
  const playerID = Math.random();
  //open a socket for the client requesting to create a game (the admin of  the game)
  const socket; //TODO Ivo
  const adminPlayer = Player(playerID, socket);
  const game = GameRoom(adminPlayer, gameID)
  currentGameRooms[gameID] = game;
  //Render view #2
});

module.exports = router;
