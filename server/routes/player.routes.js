const PlayerController = require('../controllers/player.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', PlayerController.index);
    app.post('/api/player', PlayerController.createPlayer)
    app.get('/api/player/:id',PlayerController.getOnePlayer)
    app.put('/api/player/:id', PlayerController.updatePlayer)
    app.get('/api/players', PlayerController.getAllPlayers)
    app.delete('/api/player/:id', PlayerController.deletePlayer)
}
