const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Users', new Schema({
  username: String,
  password: String,
  details: {
    firstName: String,
    lastName: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}))