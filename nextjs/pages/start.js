import {
  Heading,
  VStack, Container,
  Image, AspectRatio,
  Button, HStack,
} from '@chakra-ui/react';

export default function Start() {
  // TODO - make a theme file
  // titles are black by default
  const textColor = 'gray.400';
  const accentColor= '#EE9F29';
  const complementColor= "#187589";
  const focusedColor= '#C9841D';

  return (
    <Container maxWidth={500} display="flex" justifyContent="center">
      <VStack textAlign={"center"}  my={10} w="fit-content" display="flex">
        {/* Logo, Title, Subtitle */}
        <AspectRatio my={2} ratio={1} w={24}>
          <Image 
            src="./images/honk_logo.png"
            alt="honk"
          />
        </AspectRatio>
        <Heading size="4xl">
          I want <br /> to study...
        </Heading>
        
        <HStack w={"full"} spacing={8} py={10}>
          <Button
            alignSelf={"flex-end"}
            bg={accentColor}
            color={'white'} w={"full"} py={8}
            size='md' fontSize="2xl"
            _hover={{ bg: focusedColor}}
            _focus={{ ring: 3, ringColor: "orange.200" }}
          >
            Solo
          </Button>

          <Button
            alignSelf={"flex-end"}
            borderColor={complementColor}
            color={complementColor}
            variant={"outline"} w={"full"} py={8}
            size='md' fontSize="2xl"
            _hover={{ color: "white", bg: complementColor}}
            _focus={{ ring: 3, ringColor: "teal.200" }}
          >
            Duo
          </Button>
        </HStack>

      </VStack>
    </Container>
  )
} 