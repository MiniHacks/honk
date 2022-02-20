import {
  Heading, Text, Table,
  VStack, Container, Thead, Tr, Th, Tbody, Td,
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
  let [timeFocused, setTimeFocused] = React.useState("7:03:21");
  let [percentFocused, setPercentFocused] = React.useState("79%");

  // TODO - also format this cool stuff
  // 07:12:04 eg. 7 hours 12 minutes 4 seconds

  return (
    <Container
      maxWidth={500}
      display="flex"
      textAlign="center"
      flexDirection="column"
      justifyContent="center"
    >

      {/* Statistics */}
      <HStack my={6} spacing={4} justifyContent="inherit">
        <VStack>
          <Text alignSelf={"center"} width="fit-content !important" fontSize="lg">
            Time Focused
          </Text>
          <Heading mt={"0px !important"}
            color={complementColor}
            fontSize="4xl"
          >{timeFocused}</Heading>
        </VStack>

        <VStack>
          <Text fontSize="lg">
            Percent Focus
          </Text>
          <Heading mt={"0px !important"}
            color={accentColor}
            fontSize="4xl"
          >{percentFocused}</Heading>
        </VStack>

        <VStack>
          <Text fontSize="lg">
            Total Time
          </Text>
          <Heading mt={"0px !important"}
            color={complementColor}
            fontSize="4xl"
          >{timeFocused}</Heading>
        </VStack>
      </HStack>

      {/* FIXME - Hardcoded Table */}
      <Table
        w="full !important"
        m="0px !important"
        mb={"20px !important"}
        variant='striped'
        colorScheme='gray'
      >
        <Thead>
          <Tr>
            <Th>Topic</Th>
            <Th isNumeric>Time Studied</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Databases</Td>
            <Td isNumeric>05:35:24</Td>
          </Tr>
          <Tr>
            <Td>Datamining</Td>
            <Td isNumeric>04:35:24</Td>
          </Tr>
          <Tr>
            <Td>VR Webview</Td>
            <Td isNumeric>01:31:52</Td>
          </Tr>
          <Tr>
            <Td>Miku</Td>
            <Td isNumeric>00:23:24</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* FIXME - Hardcoded Streak */}
      <Heading>
        Current Streak: 1 🔥
      </Heading>
      <Text
        fontSize="xl"
        pt={2}
        pb={6}
        color={textColor}
      >
        knocking the goose out of the park
      </Text>

      <Button
        onClick={()=>{router.push("/login");}}
        px={8}
        color={"white"}
        bg={accentColor}
        _hover={{ bg: focusedColor}}
        _focus={{ ring: 3, ringColor: "orange.200" }}
      >
        Start New Session
      </Button>
    </Container>
  )
} 