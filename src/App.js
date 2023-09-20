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
} from '@chakra-ui/react';
import Lefthome from './LeftHome';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="flex-end" fontSize="xl" backgroundColor='#cbcbd4' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft="10" borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'>  
        <text> TrainWithUs.</text>
        
    </Box>
    <Lefthome/>
    
    </ChakraProvider>
  );
}

export default App;
