const express = require('express')
const app = express()
const port = 8000

// config/connect to database
require('./server/config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true }))

const JokeRoutes = require('./server/routes/jokes.routes')
JokeRoutes(app)

app.listen(port, () => console.log(`The server is all fired up on port ${port}`))