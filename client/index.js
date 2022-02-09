import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    //   <ChakraProvider>
    <Router>
      <App />
    </Router>,
    //  </ChakraProvider>,
    document.getElementById('app')
  )
})
