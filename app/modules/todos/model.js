const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Todos', new Schema({
  title: String,
  content: String,
  done: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'Users'
  }
}))