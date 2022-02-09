import React from 'react'

import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <h1 className='brand-title'>{name}Portfolio</h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            {/*             <Link to='/' className='pure-button'>Home</Link>
            <Link to='/' className='pure-button'>About</Link>
            <Link to='/' className='pure-button'>Portfolio</Link>
            <Link to='/' className='pure-button'>Contact</Link>
 */}          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
