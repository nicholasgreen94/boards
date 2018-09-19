const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const userKeys = require('./keys')
const User = require('../models/User')


passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy({
    // Option for google strategy
    clientID: userKeys.google.clientID,
    clientSecret: userKeys.google.clientSecret,
    callbackURL: 'http://localhost:3001/auth/google/redirect',
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if (existingUser) {
        console.log('user exists', existingUser)
        done(null, existingUser)
      } else {
        new User({
          username: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          thumbnail: profile._json.image.url
        }).save().then((newUser) => {
          console.log('new user created', newUser)
          done(null, newUser)
        })
      }
    })
  })
)
