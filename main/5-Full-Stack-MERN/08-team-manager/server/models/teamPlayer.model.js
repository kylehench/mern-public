const mongoose = require('mongoose')

const GameStatusSchema = new mongoose.Schema({
  game: { type: Number },
  status: { type: String },
}, { timestamps: true })

const TeamPlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    minlength: [2, 'Name must be at least 2 characters long.']
  },
  preferredPosition: {
    type: String,
    required: false
  },
  gameStatuses: [GameStatusSchema]

}, { timestamps: true })

module.exports = mongoose.model('TeamPlayer', TeamPlayerSchema)