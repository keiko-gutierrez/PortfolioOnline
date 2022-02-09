import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  VStack,
  Box,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider
} from '@chakra-ui/react'
import data from '../fauxDb.js'
// linter happy
// console.log(useEffect, useState, useParams)

function Nav () {
  // function map ()
  return (
    <nav>
      <ul>
        <Box alignSelf="left" bg='purple.50'>
          <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg='purple.50' />
            <VStack spacing={8}>
              <Link to='/home'>
                <Button bg='purple.100'>
                Home
                </Button>
              </Link>
              <Link to='/about'>
                <Button bg='purple.100'>
                About
                </Button>
              </Link>
              <Menu>
                <MenuButton as={Button} bg='purple.100'>
                  Projects
                </MenuButton>
                <MenuList>
                  <MenuItem bg='purple.100'>{
                    data.keiko.map((project) => {
                      return <Link key={project.id} to={`/portfolio/${project.id}`} >
                            Project{project.id} </Link>
                    })
                  } </MenuItem>
                </MenuList>
              </Menu>
              <Link to='/contact'>
                <Button bg='purple.100'>Contact</Button>
              </Link>
            </VStack>
          </Grid>
        </Box>
      </ul>
    </nav>
  )
}

export default Nav
