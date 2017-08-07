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

router.post('/', function(req, res){
    var game = req.body.game;

    var newGame = new Game({
        name: game.name,
        event: game.event,
        teams: game.teams
    });
    newGame.save(function(err){
        if(err) {
            res.send("fail");
        } else {
            res.send(newGame._id);
        }
    });
});

module.exports = router;
