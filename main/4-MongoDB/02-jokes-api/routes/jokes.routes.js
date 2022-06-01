const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
  app.get('/api/jokes', JokeController.jokes)
  app.post('/api/jokes', JokeController.createJoke)
}