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
        <HStack mb={16} spacing={6} justifyContent="space-space-between">

          {/* item */}
          <VStack p={8} boxShadow='xl' borderRadius="2xl" bg="#EE9F29">
            <AspectRatio ratio={1} w={28}>
              <Image
                  src="./images/honk.png"
                  alt="goose" />
            </AspectRatio>
            <Heading textAlign="center" color="white" my={2} size="md">
              Simple Studying
            </Heading>
            <Text textAlign="center" color={"gray.100"}>
              stay focused
            </Text>
          </VStack>

          {/* item */}
          <VStack p={8} boxShadow='xl' borderRadius="2xl" bg="#FFD494">
            <AspectRatio ratio={1} w={28}>
              <Image
                  src="./images/honk.png"
                  alt="goose" />
            </AspectRatio>
            <Heading color={"gray.800"} my={2} size="md">
              Accountability
            </Heading>
            <Text textAlign="center" color={"gray.700"}>
              with a goose and/or buddy
            </Text>
          </VStack>

          {/* item */}
          <VStack p={8} boxShadow='xl' borderRadius="2xl" bg="#EE9F29">
            <AspectRatio ratio={1} w={28}>
              <Image
                  src="./images/honk.png"
                  alt="goose" />
            </AspectRatio>
            <Heading textAlign="center" color="white" my={2} size="md">
              Really Cute Geese
            </Heading>
            <Text color={"gray.100"}>
              yeah
            </Text>
          </VStack>
          
          <Heading textAlign="right">Features of Honk!</Heading>
        </HStack>
      </Container>
    </Container>
  )
}

export default Section_Features;