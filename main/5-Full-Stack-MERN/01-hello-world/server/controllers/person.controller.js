const Person = require('../models/person.model')

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

module.exports.createPerson = (request, response) => {
  // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
  // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
  Person.create(request.body) //This will use whatever the body of the client's request sends over
    .then(person => response.json(person))
    .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
  Person.find({})
    .then(persons => {
      console.log(persons)
      response.json(persons)
    })
    .catch(err => {
      console.log(err)
      response.json(err)
    })
}

module.exports.getOnePerson = (request, response) => {
  Person.findOne({ _id: request.params._id })
    .then(person => response.json(person))
    .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
  Person.findOneAndUpdate({_id: request.params._id}, request.body, {new:true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
  Person.deleteOne({_id: request.params._id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}