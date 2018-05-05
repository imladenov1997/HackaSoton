var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/room/:roomId', function(req, res, next) {
    res.render('player_lobby', req.params)
});

module.exports = router;
