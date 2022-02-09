import React, { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme
} from '@chakra-ui/react'

import NaviBar from './NaviBar'
import Header from './Header'
import Footer from './Footer'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Request from '../pages/Request'
import Home from '../pages/Home'
// linter happy
// console.log(NaviBar, Header, Footer, Route)
// console.log(useEffect, useState, useParams)

function App () {
  return (
    <ChakraProvider theme={theme}
      backgroundColor="teal.500"
    >
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
            </Link>
            <Header />
            <div>
              <NaviBar />
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/portfolio/:id' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/request' element={<Request />} />
                <Route path='/' element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
