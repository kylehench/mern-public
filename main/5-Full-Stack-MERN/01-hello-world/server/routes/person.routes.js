const PersonController = require('../controllers/person.controller')

module.exports = (app) => {
  app.get('/api/people', PersonController.getAllPeople)
  app.get('/api/people/:_id', PersonController.getOnePerson)
  app.post('/api/people', PersonController.createPerson)
}