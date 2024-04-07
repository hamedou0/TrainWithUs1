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
<Box   borderBottomWidth={6} >

<Box display= "flex" paddingBottom={3}>

    <Box  fontWeight='semibold' textAlign="flex-end" fontSize="xl"  justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6}  maxHeight="10" marginTop={3} marginLeft={7} textColor='black'paddingRight={6} paddingTop={1}>  
          <Text>
                  TrainWithUs. 
          </Text>
    </Box>
    
    <Button  textAlign="flex-end" fontSize="xl"  justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6}  maxHeight="10" marginTop={3} marginLeft={20} textColor='black' paddingRight={6}>  
            <Text> 
                  Lifestyle.
            </Text>
    </Button>
    
    <a href='https://www.notion.so/trainwithusnutritionhandbook/db732843e92245349fa3af50414df3d3?v=85ea0354207b438d8beabb23f45ac5c6'>
    <Button  textAlign="flex-end" fontSize="xl"  justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6}  maxHeight="10" marginTop={3} marginLeft={35} textColor='black'paddingRight={6}>  
          <Text> Nutrition.</Text>
    </Button>
    </a>
    <Button  textAlign="flex-end" fontSize="xl"  justifyContent="flex-start" maxWidth={200} maxH={500} paddingLeft={6}  maxHeight="10" marginTop={3} marginLeft={35} textColor='black'paddingRight={6}>  
          <Text> Exercise.</Text>
    </Button>


    
 </Box>
 </Box>



 )




 }