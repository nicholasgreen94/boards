const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const boardSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: String,
  photos: { type: mongoose.Schema.Types.ObjectId, ref: 'Photo'},
  boardCover: String,
  boardDescription: String,
  dateAdded: Date,
})

const Board = mongoose.model('board', boardSchema)

module.exports = Board
