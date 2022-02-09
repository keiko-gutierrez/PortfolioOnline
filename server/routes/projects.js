const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getPortTable()
    .then(portTable => {
      res.json(portTable)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getProject(id)
    .then(project => {
      res.json(project)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
