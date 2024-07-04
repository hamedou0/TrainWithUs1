import React, { useState } from 'react';
import { Flex, Box, Card, CardBody, Text, Button, Center } from '@chakra-ui/react';

export default function BottomHome() {
  // State to manage visibility of additional card bodies
  const [showCards, setShowCards] = useState(false);

  // Function to toggle visibility
  const toggleCardsVisibility = () => setShowCards(!showCards);

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
            <Text alignContent='center' textColor='black' fontSize="xl" fontWeight="bolder" marginTop="3.5">Would you a few fitness challenges for today?</Text>
            <Center>
              <Button colorScheme="blue" marginTop={4} onClick={toggleCardsVisibility}>Click Here</Button>
            </Center>
            {/* Conditional rendering of additional card bodies */}
            {showCards && (
              <>
                <CardBody>
                  <Text fontSize="xl" fontWeight="bolder">Challenge 1: Aim to walk 10,000 steps today.
                  </Text>
                </CardBody>
                <CardBody>
                  <Text fontSize="xl" fontWeight="bolder">Challenge 2: Complete 30 bodyweight squats. Focus on maintaining good form throughout.</Text>
                </CardBody>
                <CardBody>
                  <Text fontSize="xl" fontWeight="bolder">Hold a plank for 1 minute. Increase the time if you're more advanced.</Text>
                </CardBody>
              </>
            )}
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
}