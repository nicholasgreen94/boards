const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  photoName: String,
  href: String,
})

const Photo = mongoose.model('photo', photoSchema)

module.exports = Photo
