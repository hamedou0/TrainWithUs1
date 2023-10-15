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
} from '@chakra-ui/react';
import Lefthome from './LeftHome';
import Righthome from './RightHome';
import NavBar from './navBar';




function App() {
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
      </ChakraProvider>
  );
}

export default App;
