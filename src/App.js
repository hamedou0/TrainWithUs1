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


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="flex-end" fontSize="xl" backgroundColor='#51e2f5' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft="10" borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={3}>  
        <text> TrainWithUs.</text>
    </Box>
    </ChakraProvider>
  );
}

export default App;
