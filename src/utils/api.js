var axios = require('axios');

function createNewGame(game) {
    console.log('about to post');
    axios.post('/games', {
        game: game
    }).then(function(res){
        var gameId = res.data;
        window.location.href = `/${gameId}/tasks`;
    }).catch(function(err){
        return err;
    });
}

module.exports = {
    createNewGame: createNewGame
};
