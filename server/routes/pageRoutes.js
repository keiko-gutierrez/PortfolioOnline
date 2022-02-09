const express = require('express')
const router = express.Router()
const fs = require('fs')

function loadProjects (callback) {
  fs.readFile('./fauxDb.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    const projects = JSON.parse(data)
    callback(projects)
  })
}

router.get('/:id', (req, res) => {
  loadProjects(projects => {
    const project = projects.keiko.find(project => project.id == req.params.id)
    res.render('portfolio', project)
  })
})

module.exports = router
