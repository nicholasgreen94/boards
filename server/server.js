const express = require("express")
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')

const app = express()

// Allow cross-origin requests
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(bodyParser.json())
app.use(logger('dev'))

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
} else {
  app.use(express.static('client/build'))
}

// Give PORT
const PORT = process.env.PORT || 3001

// Send Request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`Now connected on port ${PORT}`)
})
