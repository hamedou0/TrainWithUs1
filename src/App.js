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




function App() {
  return (
    <ChakraProvider theme={theme} > 
    <Box>
      <Box boxShadow='dark-lg'textAlign="flex-end" fontSize="xl" backgroundColor='#FFFFFF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft="10" borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'>  
        <Text> TrainWithUs.</Text>
        
    </Box>
    <Flex>
      <Box>
          <Lefthome/>
          
      </Box>
      <Box  maxWidth={800}>
        <Card  boxShadow='dark-lg' marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#FFFFFF">
            <CardBody>
                 <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Use our personalized fitness routines to hit your goals.</Text>
            </CardBody>
        </Card>
        <Card boxShadow='dark-lg' marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#FFFFFF">
            <CardBody>
              <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Get your summer body using our BMR calculator.</Text>
            </CardBody>
        </Card>
        <Card boxShadow='dark-lg' marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#FFFFFF">
          <CardBody>
            <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Utilize our built in demonstrations to visualize workouts.</Text>
          </CardBody>
        </Card>
        </Box>
        </Flex>
        </Box>
    </ChakraProvider>
  );
}

export default App;
