import {
  VStack, Heading, Text, Stack,
  HStack, Button, Container,
  SimpleGrid, GridItem, Image, AspectRatio
}  from '@chakra-ui/react';

const Section_Features = () => {
  const secondaryTextColor = 'gray.600';
  return (
    <Container minW="full">
      <Container py={20} maxW='container.lg'>
        <HStack mb={16} spacing={6} justifyContent="space-around">
          {/* item */}
          <VStack p={8} boxShadow='xl' borderRadius="2xl" bg="#EE9F29">
            <AspectRatio ratio={1} w={28}>
              <Image
                  src="./images/honk.png"
                  alt="goose" />
            </AspectRatio>
            <Heading color="white" my={2} size="md">
              Many Geese
            </Heading>
            <Text color={"gray.100"}>
              whack
            </Text>
          </VStack>

          {/* item */}
          <VStack p={8} boxShadow='xl' borderRadius="2xl" bg="#EE9F29">
            <AspectRatio ratio={1} w={28}>
              <Image
                  src="./images/honk.png"
                  alt="goose" />
            </AspectRatio>
            <Heading color="white" my={2} size="md">
              Cute Boys
            </Heading>
            <Text color={"gray.100"}>
              who are geese
            </Text>
          </VStack>

          {/* item */}
          <VStack p={8} boxShadow='xl' borderRadius="2xl" bg="#EE9F29">
            <AspectRatio ratio={1} w={28}>
              <Image
                  src="./images/honk.png"
                  alt="goose" />
            </AspectRatio>
            <Heading color="white" my={2} size="md">
              Okay CSS
            </Heading>
            <Text color={"gray.100"}>
              help
            </Text>
          </VStack>
        </HStack>
      </Container>
    </Container>
  )
}

export default Section_Features;