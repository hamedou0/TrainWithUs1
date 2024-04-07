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
          <Lefthome/>
        </Box>
        <Righthome/>
      </Flex>
      </Box>
      <Box boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" backgroundColor='#FFEFDF' borderRadius="10px" width={1150} height={440} marginTop={100} marginLeft={50} textAlign="center" textColor="black" justifyItems="center" fontWeight='bolder' paddingTop="50px" paddingLeft="10px" paddingBottom="20px"> 
      <a href='about.js'>
    <Button boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" textAlign="flex-end" fontSize="xl" backgroundColor='#FFEFDF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={35} textColor='black'paddingRight={6}>  
          <Text> test lolll.</Text>
    </Button>
    </a>
      <Box> 
        </Box>  
     </Box>



     

      </ChakraProvider>
  );
}

export default Home;