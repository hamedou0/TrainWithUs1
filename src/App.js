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
  Center,
  Button
  
} from '@chakra-ui/react';


import NavBar from './components/navBar';
import About  from './pages/About';
import BottomHome from './components/BottomOfHomePage';
import TopHome from './components/TopOfHomePage';




function App() {
  return (
    <ChakraProvider theme={theme} > 
    <Box height={1100}>
    <Box>
      <NavBar/>
      <Flex >
        <Box >
          <TopHome/>
        </Box>
      </Flex>
     </Box>
     <Flex >
        <Box >
          <BottomHome/>
        </Box>
      </Flex>
      </Box>
      
        
     
     

      </ChakraProvider>
  );
}

export default App;