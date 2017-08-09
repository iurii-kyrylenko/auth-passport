const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get(
  '/',
  passport.authenticate('basic', { session: false }),
  (req, res) => {
    res.send(`
      <html>
        <body>
          Hello, ${req.user.fullName}!
        </body>
      </html>
    `)
  }
)

module.exports = router
