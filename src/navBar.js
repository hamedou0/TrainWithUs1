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
  Button, 
  ButtonGroup
} from '@chakra-ui/react';


 export default function NavBar () { 
 return (
<Box display= "flex" >
    <Box boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" fontWeight='semibold' textAlign="flex-end" fontSize="xl" backgroundColor='#FFEFDF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'paddingRight={6} paddingTop={1}>  
          <Text> 
            TrainWithUs. 
          </Text>
    </Box>
    
    <Button boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" textAlign="flex-end" fontSize="xl" backgroundColor='#FFEFDF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={20} textColor='black' paddingRight={6}>  
           <Text> Lifestyle.</Text>
    </Button>
    
    <a href='https://www.notion.so/trainwithusnutritionhandbook/db732843e92245349fa3af50414df3d3?v=85ea0354207b438d8beabb23f45ac5c6'>
    <Button boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" textAlign="flex-end" fontSize="xl" backgroundColor='#FFEFDF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={35} textColor='black'paddingRight={6}>  
          <Text> Nutrition.</Text>
    </Button>
    </a>
    <Button boxShadow="0 0 10px rgba(0, 0, 0, 3.25)" textAlign="flex-end" fontSize="xl" backgroundColor='#FFEFDF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={35} textColor='black'paddingRight={6}>  
          <Text> Exercise.</Text>
    </Button>


    
 </Box>



 )




 }