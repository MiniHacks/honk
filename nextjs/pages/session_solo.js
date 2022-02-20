import {
  Heading, Text, Box,
  VStack, Container,
  Button, HStack,
} from '@chakra-ui/react';
import React from 'react';


export default function Start() {
  // TODO - make a theme file
  // titles are black by default
  const textColor = 'gray.400';
  const accentColor= '#EE9F29';
  const complementColor= "#187589";
  const focusedColor= '#C9841D';

  // TODO - integrate webcams 
  // TODO - actually integrate selected topic and times
  let [topic, setTopic] = React.useState("Databases");
  let [timeFocused, setTimeFocused] = React.useState("0 hours 32 minutes 12 seconds");
  let [timeDistracted, setTimeDistracted] = React.useState("2 hours 12 minutes 7 seconds");
  let [totalTime, setTotalTime] = React.useState("2 hours 44 minutes 19 seconds");
  let [topicMin, setTopicMin] = React.useState("43");
  let [percentFocused, setPercentFocused] = React.useState("-49%");

  // TODO - also format this cool stuff
  // 07:12:04 eg. 7 hours 12 minutes 4 seconds

  return (
    <Container
      maxWidth={500}
      display="flex"
      justifyContent="center"
    >
      <VStack my={10} w="fit-content">
        {/* really gross header */}
        <HStack
          mb="2"
          minWidth="full"
          justifyContent={"space-between"}
        >
          <VStack>
            <Heading size="lg">
              Topic: {" "}
              <Box
                as="span"
                color={complementColor}
                mr="10"
              >
                {topic}
              </Box>
            </Heading>
            <HStack 
              mt="0px !important"
              minWidth="full"
              color={textColor}
              justifyContent={"flex-start"}
            >
              <Text
                my="0px !important"
                color={textColor}
              >
                Topic started {topicMin} minutes ago.
              </Text>
            </HStack>
          </VStack>
          <Button
            bg={accentColor}
            h="100%"
            color={'white'}
            size='md'
            mx="2"
            fontSize="md"
            _hover={{ bg: focusedColor}}
            _focus={{ ring: 3, ringColor: "orange.200" }}
          >
            End Session
          </Button>
        </HStack>

        {/* statistics! */}
        <Box w="full" textAlign={"left"} fontSize="xl">

          <Heading size="lg"> Time Focused </Heading>
          <Text
            color={complementColor}
            size="xl" mb="4"
          >
            {timeFocused}
          </Text>

          <Heading size="lg">Time Distracted</Heading>
          <Text
            color={complementColor}
            size="xl" mb="4"
          >
            {timeDistracted}
          </Text>

          <Heading size="lg">Total Time Elapsed</Heading>
          <Text
            color={complementColor}
            size="xl" mb="4"
          >
            {totalTime}
          </Text>

          <Heading size="lg">Percent Focused</Heading>
          <Text
            color={complementColor}
            size="xl" mb="4"
          >
            {percentFocused}
          </Text>
        </Box>
      </VStack>
    </Container>
  )
} 