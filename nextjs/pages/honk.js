import {
  Heading, Text,
  VStack, Container,
  Button, HStack, Image,
} from '@chakra-ui/react';
import React from 'react';


export default function Start() {
  // TODO - make a theme file
  // titles are black by default
  const textColor = '#FFD494';
  const accentColor= '#EE9F29';
  const complementColor= "#187589";
  const focusedColor= '#C9841D';

  // TODO - integrate webcams 
  // TODO - actually integrate selected topic and times
  let [topic, setTopic] = React.useState("Databases");
  let [newTopic, setNewTopic] = React.useState("Cute Geese Boys");

  // TODO - also format this cool stuff
  // 07:12:04 eg. 7 hours 12 minutes 4 seconds

  return (
    <Container w="100%" minH="100vh" backgroundSize="cover" maxW="unset" bg={complementColor} >
      <Container
        color={"white"}
        maxWidth={500}
        display="flex"
        justifyContent="center"
      >
        <HStack>
          <VStack my={10} w="fit-content" alignItems={"flex-start"}>
            <Heading
              size="4xl"
              mb="2"
            >Honk!</Heading>

            <Heading color={textColor} size="xl"> You were viewing: </Heading>
            <Text 
              fontSize="2xl" mb="2"
            >
              {newTopic}
            </Text>

            <Heading color={textColor} size="xl">Instead of:</Heading>
            <Text
              fontSize="2xl" mb="2"
            >
              {topic}
            </Text>

            <Heading mb={"8px !important"} color={textColor} size="xl">
              Are you <br/> focused?
            </Heading>

            <HStack spacing={4}>
              <Button
                px={8}
                color={"white"}
                bg={accentColor}
                _hover={{ bg: focusedColor}}
                _focus={{ ring: 3, ringColor: "orange.200" }}
              >
                Yes
              </Button>

              <Button
                px={8}
                color={"white"}
                bg={accentColor}
                _hover={{ bg: focusedColor}}
                _focus={{ ring: 3, ringColor: "orange.200" }}
              >
                No
              </Button>
            </HStack>
          </VStack>
            <Image
                position={"fixed"}
                left={"50%"}
                transform={"translateX(calc(350px - 50%))"}
                top={"160px"}
                src="./images/honk.png"
                alt="big honk"
            />
        </HStack>
      </Container>
    </Container>
  )
} 