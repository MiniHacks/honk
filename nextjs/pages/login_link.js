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
    <Container maxWidth={500} display="flex" justifyContent="center">
      <VStack textAlign={"center"} my={10} w="fit-content" display="flex">
        {/* Logo, Title, Subtitle */}
        <AspectRatio my={2} ratio={1} w={24}>
          <Image 
            src="./images/honk_logo.png"
            alt="honk"
          />
        </AspectRatio>
        <Heading size="4xl">
          Honk!
        </Heading>
        <Heading color={textColor} fontWeight="regular" size="lg">
          Focused, Friendly Learning.
        </Heading>

        {/* Phone Number Input */}
        <Container p={0} mb={10} w="full">
        <Text py={3}
          fontSize="lg" fontWeight="semibold"
          mt={10} textAlign={"left"}
        >
          Enter Your Room Link
        </Text>
        <Input mb={4}
          placeholder={"honk.work/L0s3Rs"} w={"full"} />
        </Container>
        
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

        <Link
          py={4} fontSize="lg"
          color={textColor}
          textDecoration="underline"
          _hover={{ color: complementColor }}
        >
          (Or enter a phone number to create a room!)
        </Link>
      </VStack>
    </Container>
  )
} 