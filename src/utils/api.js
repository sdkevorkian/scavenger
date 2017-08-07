var axios = require('axios');

function createNewGame(game) {
    axios.post('/games', {
        game: game
    }).then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}

module.exports = {
    createNewGame: createNewGame
};
