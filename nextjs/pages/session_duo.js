import {
  Heading, Text, Box,
  VStack, Container,
  Button, HStack,
} from '@chakra-ui/react';
import React from 'react';

import {useRouter} from "next/router";

export default function Start() {
  // TODO - make a theme file
  // titles are black by default
  const textColor = 'gray.400';
  const accentColor= '#EE9F29';
  const complementColor= "#187589";
  const focusedColor= '#C9841D';

  const router = useRouter();

  // TODO - integrate webcams 
  // TODO - actually integrate selected topic and times
  let [topic, setTopic] = React.useState("Databases");
  let [timeFocused, setTimeFocused] = React.useState("00:32:12");
  let [totalTime, setTotalTime] = React.useState("03:13:17");
  let [topicMin, setTopicMin] = React.useState("43");

  return (
    <Container maxWidth={500} display="flex" justifyContent="center">
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
            onClick={()=>{router.push("/summary");}}
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

        {/* webcam placeholders */}
        <Container
          mb={"14px !important"}
          display="flex"
          size="md"
          w="full" h="250px"
          justifyContent={"center"}
          alignItems={"center"}
          bg="gray.100"
        >
          This is where the webcams would go.
        </Container>

        <Container
          display="flex"
          size="md"
          w="full" h="250px"
          justifyContent={"center"}
          alignItems={"center"}
          bg="gray.100"
        >
          This is where the webcams would go.
        </Container>

        {/* stats */}
        <HStack mt={"14px !important"}
          minWidth="full"
          color={textColor}
          justifyContent={"space-between"}
        >
          <Text size="sm">
            Time Focused: {" "} {timeFocused}
          </Text>

          <Text size="sm">
            Total Time: {" "} {totalTime}
          </Text>
        </HStack>
      </VStack>
    </Container>
  )
} 