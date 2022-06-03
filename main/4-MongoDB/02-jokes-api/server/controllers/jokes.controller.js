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

// get one joke
module.exports.oneJoke = (req, res) => {
  Joke.find({ _id: req.params._id })
    .then(oneJoke => {
      res.json({ joke: oneJoke })
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
    })
}

// create a joke
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => {
      res.json(newJoke)
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err})
    })
}

// update joke
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate(
    { _id: req.params._id },
    req.body,
    { new: true, runValidators: true }
    )
    .then(updatedJoke => {
      res.json(updatedJoke)
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err})
    })
}

// delete joke
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params._id })
    .then(result => {
      res.json( { result: result })
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', err: err})
    })
}