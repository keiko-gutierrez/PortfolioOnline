const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPortTable
}

function getPortTable (db = connection) {
  return db('projects').select()
}
