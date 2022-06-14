const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
  app.get('/api/authors', AuthorController.readAllAuthors)
  app.get('/api/authors/:_id', AuthorController.readOneAuthor)
  app.post('/api/authors', AuthorController.createAuthor)
  app.put('/api/authors/:_id', AuthorController.updateAuthor)
  app.delete('/api/authors/:_id', AuthorController.deleteAuthor)
}