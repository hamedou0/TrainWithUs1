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
      <Box boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" backgroundColor='#FFEFDF' borderRadius="10px" width={1150} height={440} marginTop={100} marginLeft={7} textAlign="center" textColor="black" justifyItems="center" fontWeight='bolder' paddingTop="50px" paddingLeft="10px" paddingBottom="20px"> 
        <Text>
         
        </Text>
     </Box>

      </ChakraProvider>
  );
}

export default App;
