import {
  Heading, Text,
  VStack, Container,
  Button, HStack, Image,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import Head from "next/head";
import {useRouter} from "next/router";

export default function Start() {
  // TODO - make a theme file
  // titles are black by default
  const textColor = '#FFD494';
  const accentColor= '#EE9F29';
  const complementColor= "#187589";
  const focusedColor= '#C9841D';

  const router = useRouter();
  console.log(router);
  const searchParams = new URLSearchParams(router.asPath.substring(router.asPath.indexOf("?")));
  const newTopic = searchParams.get("topic");

  // TODO - integrate webcams
  // TODO - actually integrate selected topic and times
  // let [topic, setTopic] = React.useState("Datamining");
  // let [newTopic, setNewTopic] = React.useState("Cusehacks 2022");

  // TODO - also format this cool stuff
  // 07:12:04 eg. 7 hours 12 minutes 4 seconds
  useEffect(() => {
    fetch("/api/alertnumber")
  }, [])
  return (
    <Container w="100%" minH="100vh" backgroundSize="cover" maxW="unset" bg={complementColor} >
      <Head><title>Honk!!</title></Head>
      <Container
        color={"white"}
        maxWidth={500}
        display="flex"
        justifyContent="center"
      >
        <HStack>
          <VStack my={10} w="fit-content" spacing={5} alignItems={"flex-start"}>
            <Heading
              size="4xl"
              mb="2"
            >Honk!</Heading>

            <Heading color={textColor} size="2xl"> You were viewing: </Heading>
            <Text
              fontSize="3xl" mb="2" fontWeight={"bold" }
            >
              {newTopic}
            </Text>

            <Heading mb={"8px !important"} color={textColor} size="xl">
              Are you <br/> focused?
            </Heading>

            {/* TODO - add functionality to the buttons */}
            <Text
              fontSize="3xl" mb="2" fontWeight={"bold" }
            >
              We've texted <br/>your accountabuddy.
            </Text>
          </VStack>
            <Image
                position={"fixed"}
                left={"50%"}
                maxW={650}
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
