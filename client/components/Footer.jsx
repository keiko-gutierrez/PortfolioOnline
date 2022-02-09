import React from 'react'

function Footer (props) {
  const copyright = '2022 KeikoGTZ'
  const developer = 'Keiko'

  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
      <div>{developer}</div>
    </div>
  )
}

export default Footer
