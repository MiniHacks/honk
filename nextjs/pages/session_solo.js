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
  let [timeFocused, setTimeFocused] = React.useState("00:32:12");
  let [totalTime, setTotalTime] = React.useState("03:13:17");
  let [topicMin, setTopicMin] = React.useState("43");

  return (
    <Container maxWidth={500} display="flex" justifyContent="center">
      <VStack my={10} w="fit-content">
        {/* really gross header */}
        
        <Heading></Heading>

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