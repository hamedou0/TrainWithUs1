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

} from '@chakra-ui/react';
   

export default function Righthome ()  {
 return (
  <Box  maxWidth={800} marginTop="30px" >
  <Card  boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#FFEFDF">
      <CardBody>
           <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Use our personalized fitness routines to hit your goals.</Text>
      </CardBody>
  </Card>
  <Card boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#FFEFDF">
      <CardBody>
        <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Get your summer body using our BMR calculator.</Text>
      </CardBody>
  </Card>
  <Card boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#FFEFDF">
    <CardBody>
      <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Utilize our built in demonstrations to visualize workouts.</Text>
    </CardBody>
  </Card>
  </Box>

 );

};
