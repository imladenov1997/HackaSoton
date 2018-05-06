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

    game.playerJoined(newPlayer, playerID);

    res.json({player: playerID, game: gameID}); 
  } else {
    //Not sure what to send here
    res.json({error : "No such room"});
  }
});

function isAdmin(gameRequest) {
  const game = currentGameRooms[gameRequest.params.gameID];
  return game.admin.id == gameRequest.params.playerID;
}

function playerName(gameRequest) {
  const game = currentGameRooms[gameRequest.params.gameID];
  return game.players[gameRequest.params.playerID].name;
}

router.get('/inprogress/:gameID/:playerID', function(req, res, next) {
  if (isAdmin(req)) {
    res.render('admin_game_page', { game: req.params.gameID, player: req.params.playerID, name: playerName(req) });
  } else {
    res.render('game_page', { game: req.params.gameID, player: req.params.playerID, name: playerName(req) });
  }
});

router.get('/join/:gameID/:playerID', function(req, res, next) {
    if (isAdmin(req)) {
      res.render('master_lobby', { game: req.params.gameID, player: req.params.playerID, name: playerName(req) });
    } else {
      res.render('player_lobby', { game: req.params.gameID, player: req.params.playerID, name: playerName(req) });
    }
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