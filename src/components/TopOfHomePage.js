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
  Img
  
} from '@chakra-ui/react'; 

   

export default function TopHome ()  {
 return (
    <Box    borderRadius="10px" width={600} height={240} marginTop={50} marginLeft={350} textAlign="center"   fontWeight='bolder' paddingTop="50px" paddingLeft="10px" paddingBottom="4px"> 
        <Text fontSize={50} textColor="black"> Meet your fitness goals with  TrainWithUs.</Text> 
        <Text paddingTop={12} fontSize={50} paddingLeft={10} paddingRight={10}>Your mobile personal trainer.
        
        </Text>
     </Box>
 )
}