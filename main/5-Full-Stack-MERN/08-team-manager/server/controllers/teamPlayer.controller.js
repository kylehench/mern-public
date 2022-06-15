const Player = require('../models/teamPlayer.model')

// create
module.exports.createPlayer = (request, response) => {
  // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
  Player.create(request.body) // This will use whatever the body of the client's request sends over
    .then(player => response.json(player))
    .catch(err => response.status(400).json(err))
}

// read
module.exports.readAllPlayers = (request, response) => {
  Player.find()
    .then(players => response.json(players))
    .catch(err => response.json(err))
}

module.exports.readOnePlayer = (request, response) => {
  Player.findOne({_id: request.params._id})
    .then(player => response.json(player))
    .catch(err => response.json(err))
}

// update
module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({_id: request.params._id}, request.body, {new: true, runValidators: true})
    .then(updatedPlayer => response.json(updatedPlayer))
    .catch(err => response.status(400).json(err))
}

// delete
module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({_id: request.params._id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}