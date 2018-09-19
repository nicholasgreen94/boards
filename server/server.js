const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const passportSetup = require('./config/passport-setup')
const userKeys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express()

// Allow cross-origin requests
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, }))
app.use(bodyParser.json())
app.use(logger('dev'))

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
} else {
  app.use(express.static('client/build'))
}

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [userKeys.session.cookieKey]
  })
)

// connect to mongodb
mongoose.connect(userKeys.mlab.dbURI, () => {
  console.log('connected to db')
})

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

// Setting up the Routes
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

// Give PORT
const PORT = process.env.PORT || 3001

// Send Request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})


app.listen(PORT, () => {
  console.log(`Now connected on port ${PORT}`)
})
