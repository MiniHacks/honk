import {
  VStack, Heading, Text, Stack,
  HStack, Button, Container,
  SimpleGrid, GridItem, Image, AspectRatio,
  useColorMode, useColorModeValue,
}  from '@chakra-ui/react';

const Section = () => {
  const { toggleColorMode } = useColorMode();
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  const secondaryBGColor = useColorModeValue('gray.100', 'gray.700');;

  return (
    <Container minW="full" bg={secondaryBGColor}>
      <Container py={10} maxW='container.lg'>

        <SimpleGrid columns={5} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={3}>
            <VStack mb={16} spacing={6} alignItems="stretch">
              {/* Hero Title, Caption, Buttons */}
              <Stack py={10} maxW='90%'>
                <Heading my={4} size="lg">
                  The Future of Geese
                </Heading>
                <Text color={secondaryTextColor}>
                  This is where some generic text goes;
                  check out how socially good our app is.
                  It can save the world somehow even
                  though it only took us 24 hours to make
                  it!
                </Text>
                <Text color={secondaryTextColor}>
                  Please love our web app—I had to sleep
                  in Keller Hall to get it finished, and I
                  am slowly going off the rails. Though,
                  maybe that's a good thing?
                </Text>
              </Stack>
            </VStack>
          </GridItem>

          <GridItem colSpan={2} display="flex" alignItems="center">
              <Image
                src="./images/honk.png"
                alt="honker" />
          </GridItem>
          
        </SimpleGrid>

      </Container>
    </Container>
  )
}

export default Section;