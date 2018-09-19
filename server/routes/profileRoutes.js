const router = require('express').Router()

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login')
  } else {
    next()
  }
}

router.get('/auth', authCheck, (req, res) => {
  res.send(req.user)
})


module.exports = router
