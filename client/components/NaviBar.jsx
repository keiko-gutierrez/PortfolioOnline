import React, { useState, useEffect } from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom'

// linter happy
// console.log(useEffect, useState, useParams)

function Nav () {
  return (
    <nav>
      <ul>
        <Link to='/' className='pure-button'>Home</Link>
        <Link to='/about' className='pure-button'>About</Link>
        <Link to='/portfolio:id' className='pure-button'>Portfolio</Link>
        <Link to='/Contact' className='pure-button'>Contact</Link>
          place holder
      </ul>
    </nav>
  )
}

export default Nav
