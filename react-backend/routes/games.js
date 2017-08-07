var express = require('express');
var router = express.Router();
var Game = require('../models/game');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});

router.post('/games', function(req, res){
    Game.create({game})
        .then(function(res){
            res.send("game created!");
        })
        .catch(function(err){
            res.send(err);
        });
});

module.exports = router;
