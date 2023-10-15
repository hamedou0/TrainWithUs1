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
  ButtonGroup,
  
} from '@chakra-ui/react';


 export default function NavBar () { 
 return (
<Box display= "flex">
    <Box boxShadow='lg' fontWeight='semibold' textAlign="flex-end" fontSize="xl" backgroundColor='#FFFFFF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'paddingRight={6} paddingTop={1}>  
          <Text> 
            TrainWithUs. 
          </Text>
    </Box>
    <Link href="https://chakra-ui.com">
    <Button boxShadow='base' textAlign="flex-end" fontSize="xl" backgroundColor='#FFFFFF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={9} textColor='black' paddingRight={6}>  
          <Text> Nutrition.</Text>
    </Button>
    </Link>
    <Button boxShadow='base' textAlign="flex-end" fontSize="xl" backgroundColor='#FFFFFF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'paddingRight={6}>  
          <Text> Lifestyle.</Text>
    </Button>
    <Button boxShadow='base' textAlign="flex-end" fontSize="xl" backgroundColor='#FFFFFF' justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6} borderRadius="20px" maxHeight="10" marginTop={3} marginLeft={7} textColor='black'paddingRight={6}>  
          <Text> Exercise.</Text>
    </Button>


    
 </Box>



 )




 }