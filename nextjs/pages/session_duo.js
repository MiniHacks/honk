import {
  Heading, Text, Link, Box,
  VStack, Container,
  Image, AspectRatio,
  Input, Button, HStack,
  useClipboard,
} from '@chakra-ui/react';
import React from 'react';
import { CopyIcon } from '@chakra-ui/icons';


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
  let [timeFocused, setTimeFocused] = React.useState("00:32:12");
  let [totalTime, setTotalTime] = React.useState("03:13:17");

  return (
    <Container maxWidth={500} display="flex" justifyContent="center">
      <VStack my={10} w="fit-content">
        <HStack mb={5}
          minWidth="full"
          justifyContent={"space-between"}
        >
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
          <Button
            bg={accentColor}
            h="full"
            color={'white'}
            size='md'
            mx="2"
            fontSize="sm"
            _hover={{ bg: focusedColor}}
            _focus={{ ring: 3, ringColor: "orange.200" }}
          >
            End Session
          </Button>
        </HStack>

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