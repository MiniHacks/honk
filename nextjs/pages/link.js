import {
  Heading,
  VStack, Container,
  Image, AspectRatio,
  Button, useClipboard,
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

  // TODO - actually integrate room links logic
  const [value, setValue] = React.useState("honk.work/LI3s2");
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Container maxWidth={500} display="flex" justifyContent="center">
      <VStack textAlign={"center"} my={10} w="fit-content" display="flex">
        {/* Logo, Title, Subtitle */}
        <AspectRatio my={2} ratio={1} w={24}>
          <Image 
            src="./images/honk_logo.png"
            alt="honk"
          />
        </AspectRatio>
        <Heading size="2xl">
          Your Room Link:
        </Heading>

        <Heading pb={20} // FIXME - p should be m
          color={complementColor}
          size="xl"
        >
          {value}
        </Heading>

        <Button my
          w={"full"}
          py={8}
          leftIcon={<CopyIcon />}
          onClick={onCopy}
          size='md'
          fontSize="2xl"
          _focus={{ ring: 3, ringColor: "orange.200" }}
        >
          {hasCopied ? 'Copied!' : 'Copy to Clipboard'}
         </Button>
        <Button
          bg={accentColor}
          py={8}
          color={'white'} w={"full"}
          size='md'
          fontSize="2xl"
          _hover={{ bg: focusedColor}}
          _focus={{ ring: 3, ringColor: "orange.200" }}
        >
          Begin Session
        </Button>
      </VStack>
    </Container>
  )
} 