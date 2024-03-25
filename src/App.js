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
  
} from '@chakra-ui/react';
import Lefthome from './components/LeftHome';
import Righthome from './components/RightHome';
import NavBar from './components/navBar';




function App() {
  return (
    <ChakraProvider theme={theme} > 
    <Box>
      <NavBar/>
      <Flex justify-content= {Center} align-items= {Center}>
        <Box >
          <Lefthome/>
        </Box>
        
      </Flex>
      </Box>
      
        <Text>
         
        </Text>
     
     

      </ChakraProvider>
  );
}

export default App;
