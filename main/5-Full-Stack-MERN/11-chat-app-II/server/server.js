const express = require('express')
const app = express()
const cors = require('cors')
const socket = require('socket.io')
const port = 8000
app.use(cors())
 
const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});
 
// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['*'],
    credentials: true,
    }
})

const chatContent = []

// io.emit emits an event to all connected clients
// socket.broadcast.emit emits an event to all clients other than this particular one, referenced by the socket variable
// socket.emit emits an event directly to this specific client
io.on('connection', socket => {
  // NOTE: Each client that connects get their own socket id!
  // if this is logged in our node terminal, a new client has successfully completed the handshake
  console.log('socket id: ' + socket.id)
  console.log('Nice to meet you. (shake hand)')
  socket.emit('welcome','Hello from the server. Glad you can join us.')

  socket.on('userJoins', username => {
    console.log(`${username} has joined the chat.`)
    const joinObj = {userJoins: {username: username}}
    chatContent.push(joinObj)
    socket.broadcast.emit('userJoins', joinObj)
    socket.emit('chatContent', chatContent)
  })
  socket.on('msg', data => {
    console.log('received msg data')
    chatContent.push(data)
    socket.broadcast.emit('msg', data)
  })
})