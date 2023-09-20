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
  extendTheme,
  CSSReset
} from '@chakra-ui/react';
import Lefthome from './LeftHome';
import Righthome from './RightHome';




function App() {
  return (
    <ChakraProvider theme={theme}> <Box color="blue">
      <Box textAlign="flex-end" fontSize="xl" backgroundColor='#cbcbd4' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft="10" borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'>  
        <Text> TrainWithUs.</Text>
        
    </Box>
    <Lefthome/>
     <Righthome/>
    </Box>
    </ChakraProvider>
  );
}

export default App;
