const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
  app.get('/api/jokes', JokeController.jokes)
  app.get('/api/jokes/:_id', JokeController.oneJoke)
  app.post('/api/jokes', JokeController.createJoke)
  app.put('/api/jokes/:_id', JokeController.updateJoke)
  app.delete('/api/jokes/:_id', JokeController.deleteJoke)
}