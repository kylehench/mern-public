const Joke = require('../models/jokes.model')

// get all jokes
module.exports.jokes = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      res.json({ jokes: allJokes })
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
    })
}

// create a joke
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => {
      res.json({ joke: newJoke })
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err})
    })
}