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
      <Box textAlign="flex-end" fontSize="xl" backgroundColor='blue' justifyContent="flex-start">
    </Box>
    </ChakraProvider>
  );
}

export default App;
