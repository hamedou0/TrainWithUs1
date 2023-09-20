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
   

export default function Righthome ()  {
 return (
    <Box backgroundColor='#cbcbd4' borderRadius="10px" width={400} height={400} marginTop={100} marginLeft={7} textAlign="center" textColor="black" justifyItems="center" fontWeight='bolder' paddingTop="50px"> 
        <Text fontSize="l"> Meet your fitness goals with <span> TrainWithUs.</span></Text>
        <Text paddingTop={12} fontSize="l" paddingLeft={10} paddingRight={10}>Improve your nutrition,
         build strength through weightlifting or cardio.
         <Text paddingTop={12}>  TrainWithUs offers 
          nutrition plans, a diverse range of workout routines, and expert guidance to help you achieve your fitness goals. 
         </Text>
        </Text>
     </Box>

 );

};
