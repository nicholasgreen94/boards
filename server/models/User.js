const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const userSchema = new Schema({
  username: String,
  googleId: String,
  email: String,
  thumbnail: String,
  boards: { type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
})

const User = mongoose.model('user', userSchema)

module.exports = User
