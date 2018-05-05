var express = require('express');
var router = express.Router();
var io = require('../views/js/io.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
