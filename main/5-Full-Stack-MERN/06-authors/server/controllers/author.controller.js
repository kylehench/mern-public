const Author = require('../models/author.model')

// create
module.exports.createAuthor = (request, response) => {
  // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
  Author.create(request.body) // This will use whatever the body of the client's request sends over
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}

// read
module.exports.readAllAuthors = (request, response) => {
  Author.find()
    .then(authors => response.json(authors))
    .catch(err => response.json(err))
}

module.exports.readOneAuthor = (request, response) => {
  Author.findOne({_id: request.params._id})
    .then(author => response.json(author))
    .catch(err => response.json(err))
}

// update
module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({_id: request.params._id}, request.body, {new: true, runValidators: true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(err => response.status(400).json(err))
}

// delete
module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({_id: request.params._id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}