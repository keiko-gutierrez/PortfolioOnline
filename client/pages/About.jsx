import React from 'react'
// import { Link } from 'react-router-dom'
import {
  Box,
  Center
} from '@chakra-ui/react'
// import data from '../fauxDb.js'

function About () {
  return (
    <div>
      <Box bg='orange.50' textColour='purrple.200'>
        <Center>
          this i where i can write about y back grou and my hobbies
          maybe have a mini blog
          <div><image href='../blog-pics/babyYoda.jpg' /></div>
        </Center>
      </Box>
    </div>
  )
}

export default About
