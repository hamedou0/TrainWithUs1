import React from 'react';

import { Flex, Box, Card, CardBody, Text, Button, Center } from '@chakra-ui/react';
import { useState } from 'react';

export default function BottomHome() {
  return (
    <Flex direction="row" justify="space-between" marginTop={210}>
      <Box>
        <Card marginLeft={70} height={100} width={600}>
          <CardBody>
            <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Use our personalized fitness routines to hit your goals.</Text>
          </CardBody>
        </Card>
        <Card marginTop={70} marginLeft={70} height={100} width={600}>
          <CardBody>
            <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Get your summer body using our BMR calculator.</Text>
          </CardBody>
        </Card>
        <Card marginTop={70} marginLeft={70} height={100} width={600}>
          <CardBody>
            <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Utilize our built-in demonstrations to visualize workouts.</Text>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Card width={500} height={425} marginLeft={100} alignContent={'Center'}>
          <CardBody>
            <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Would you like a fitness challenge for today?</Text>
            <Center>
              <Button colorScheme="blue" marginTop={4}>Click Here</Button>
            </Center>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
}
 
