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
  Card,
  CardBody,
Flex
} from '@chakra-ui/react';
   

export default function Righthome ()  {
 return (
   
  <Box  maxWidth={700} marginTop="250px"  alignContent={'center'}>
  <Card  marginTop={70} marginLeft={70} height={100} width={600} >
      <CardBody>
           <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Use our personalized fitness routines to hit your goals.</Text>
      </CardBody>
  </Card>
  <Card  marginTop={70} marginLeft={70} height={100} width={600} >
      <CardBody>
        <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Get your summer body using our BMR calculator.</Text>
      </CardBody>
  </Card>
  <Card  marginTop={70} marginLeft={70} height={100} width={600} >
    <CardBody>
      <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Utilize our built in demonstrations to visualize workouts.</Text>
    </CardBody>
  </Card>
  </Box>
  

 );

};
