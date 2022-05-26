const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();

// we can create a function to return a random / fake "Product"
const createProduct = () => {
  const newFake = {
      name: faker.commerce.productName(),
      price: '$' + faker.commerce.price(),
      department: faker.commerce.department()
  }
  return newFake
};
const newFakeProduct = createProduct();
// console.log(newFakeProduct);
/*
* The output of the above console log will look like this
* {
*   name: 'Anime Figure',
*   price: '$568.00
*   department: 'Tools' 
* }
*/

const createUser = () => {
  const user = {
    _id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.firstName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
  }
  return user
}
const newFakeUser = createUser();
console.log(newFakeUser);


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
