const PlayerController = require('../controllers/teamPlayer.controller')

module.exports = (app) => {
  app.get('/api/players', PlayerController.readAllPlayers)
  app.get('/api/players/:_id', PlayerController.readOnePlayer)
  app.post('/api/players', PlayerController.createPlayer)
  app.put('/api/players/:_id', PlayerController.updatePlayer)
  app.delete('/api/players/:_id', PlayerController.deletePlayer)
  app.get('/api/players/:_id/games/:gameId/status/:status', PlayerController.setGameStatus)
}