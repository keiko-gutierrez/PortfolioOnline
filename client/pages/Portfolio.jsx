import React from 'react'
import { useParams } from 'react-router-dom'
import NaviBar from '../components/NaviBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import data from '../fauxDb.js'
console.log(data)

// linter happy
// console.log(NaviBar, Header, Footer)

function Portfolio () {
  const { id } = useParams()
  const project = data.keiko.find((project) => {
    return project.id === Number(id)
  })
  console.log(id)
  return (
    <h2> {project.prjctName} </h2>
  )
}

export default Portfolio
