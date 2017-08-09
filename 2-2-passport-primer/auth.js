const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy

const verifyCallback = (username, password, done) => {
  if (username === 'foo' && password === 'bar') {
    return done(null, {
      username, fullName: 'The Foo'
    })
  }
  else {
    return done(null, false)
  }
}

passport.use(new BasicStrategy(verifyCallback))
