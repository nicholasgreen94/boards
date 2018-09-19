//> Include the models
const User = require('./User')
const Board = require('./Board')
const Photo = require('./Photo')

const db = {
  User,
  Board,
  Photo
}

module.exports = db
