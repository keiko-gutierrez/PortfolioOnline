import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NaviBar from '../components/NaviBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

// linter happy
// console.log(NaviBar, Header, Footer)
// console.log(useEffect, useState, useParams)

function Home () {
  return (
    <div>
      {data.keiko.map((project) => {
        return <h2 key={project.id} >{project.prjctName}</h2>
      })}
    </div>
  )
}

export default Home
