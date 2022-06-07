const Product = require('../models/product.model')

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

module.exports.createProduct = (request, response) => {
  // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
  Product.create(request.body) // This will use whatever the body of the client's request sends over
    .then(product => response.json(product))
    .catch(err => response.json(err))
}