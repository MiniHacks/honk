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
                  How Does Honk! Work?
                </Heading>
                <Text color={secondaryTextColor}>
                  Begin a study session with Honk!,
                  choosing to either study solo or 
                  to study with a friend.

                  - If you get distracted while studying,
                  Honk! holds you accountable by viewing
                  your browser and detecting pivots from
                  studying.
                </Text>
                <Text color={secondaryTextColor}>
                  Furthermore, Honk! also provides statistics about
                  your time focused and your total time studied.
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