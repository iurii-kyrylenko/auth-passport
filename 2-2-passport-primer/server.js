const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./router')
require('./auth')
const passport = require('passport')

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(passport.initialize())
server.use('/', routes)

server.listen(3000)
console.log('Server listening on port 3000')
