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
  <Card marginTop={70} marginLeft={140} height={100} width={600} backgroundColor="#cbcbd4">
  <CardBody>
    <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>

 );

};
