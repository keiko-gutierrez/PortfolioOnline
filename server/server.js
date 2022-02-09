const path = require('path')
const express = require('express')

const projects = require('./routes/pageRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
server.use('/api/v1/projects', projects)
server.use('/v1/*', (req, res) => res.sendStatus(404))

module.exports = server
