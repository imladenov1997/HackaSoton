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
  const adminPlayer = new Player(playerID);
  const game = new GameRoom(adminPlayer, gameID)
  currentGameRooms[gameID] = game;
  //Render the lobby page and send back the admin his id
  res.json({player: playerID, game: gameID});
});

router.post('/getPlayerID/:gameID', function(req, res, next) {
  const gameID = req.params.gameID;
  if(currentGameRooms.hasOwnProperty(gameID)) {
    const game = currentGameRooms[gameID];
    const playerID = game.getNextPlayerID();
    const newPlayer = new Player(playerID);
    game.a
    res.json({player: playerID}); 
  } else {
    //Not sure what to send here
    res.json({error : "No such room"});
  }
});

router.get('/inprogress/:gameID', function(req, res, next) {
    res.render('game_page')
});

router.get('/join/:gameID/:playerID', function(req, res, next) {                              
    console.log("GET join")
    res.render('player_lobby');
});

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