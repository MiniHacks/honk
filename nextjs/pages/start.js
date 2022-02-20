import {
  Heading, Text, Link,
  VStack, Container,
  Image, AspectRatio,
  Input, Button,
} from '@chakra-ui/react';

export default function Start() {
  // TODO - make a theme file
  // titles are black by default
  const textColor = 'gray.400';
  const accentColor= '#EE9F29';
  const complementColor= "#187589";
  const focusedColor= '#C9841D';

  return (
    <Container display="flex" justifyContent="center">
      <VStack textAlign={"center"}  my={10} w="fit-content" display="flex">
        {/* Logo, Title, Subtitle */}
        <AspectRatio my={2} ratio={1} w={24}>
          <Image 
            src="./images/honk_logo.png"
            alt="honk"
          />
        </AspectRatio>
        <Heading size="4xl">
          I want to study...
        </Heading>
        <Heading color={textColor} fontWeight="regular" size="lg">
          This is a test
        </Heading>
        
        <Button
          alignSelf={"flex-end"}
          bg={accentColor}
          color={'white'}
          my={10} px={8}
          size='md' fontSize="lg"
          _hover={{ bg: focusedColor}}
          _focus={{ ring: 3, ringColor: "orange.200" }}
        >
          Log In
        </Button>

        <Button
          alignSelf={"flex-end"}
          variant={"outline"}
          color={}
          my={10} px={8}
          size='md' fontSize="lg"
          _hover={{ color: "white", bg: accentColor}}
          _focus={{ ring: 3, ringColor: "orange.200" }}
        >
          Log In
        </Button>

      </VStack>
    </Container>
  )
} 