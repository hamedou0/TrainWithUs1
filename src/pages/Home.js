import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Card,
  CardBody,
  Button
} from '@chakra-ui/react';
import Lefthome from '../components/LeftHome';
import Righthome from '../components/RightHome';
import NavBar from '../components/navBar';
import { BrowserRouter, Routes, Route } from
 
"react-router-dom";

import About from "./About";




function Home () {
  return (
    <ChakraProvider theme={theme} > 
    <Box alignItems="flex-start">
      <NavBar/>
      <Flex>
        <Box>
          
        </Box>
        <Righthome/>
      </Flex>
      </Box>
      
    



     

      </ChakraProvider>
  );
}

export default Home;