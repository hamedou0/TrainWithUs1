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
import Tophome from './components/LeftHome';
import RightHome from './components/RightHome';
import NavBar from './components/navBar';
import About  from './pages/About';




function App() {
  return (
    <ChakraProvider theme={theme} > 
    <Box>
      <NavBar/>
      <Flex >
        <Box >
          <Tophome/>
        </Box>
      </Flex>
     </Box>
     <Flex >
        <Box >
          <RightHome/>
        </Box>
      </Flex>
      
        
     
     

      </ChakraProvider>
  );
}

export default App;