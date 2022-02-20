import {
  VStack, Heading, Text, Stack,
  HStack, Button, Container,
  useColorMode, useColorModeValue,
}  from '@chakra-ui/react';

const Hero = () => {
  const { toggleColorMode } = useColorMode();
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  
  return (

    // Header Component
    <Container minW="full">
      <Container maxW='container.lg'>
        <VStack mb={16} spacing={6} alignItems="stretch">
            {/* Navigation Bar */}
            <HStack
              color={secondaryTextColor}
              mb={14} justifyContent="space-between"
            >
              <Text fontWeight='bold' fontSize="xl">Geese Template</Text>
              <Button
                onClick={toggleColorMode}
                _active={{ bg: "teal.600" }}
                size="md">
                🦢🦢🦢
              </Button>
            </HStack>

            {/* Hero Title, Caption, Buttons */}
            <Stack maxW='70%'>
              <Heading mb={4} size="2xl">
                Insert interesting catchphrase.
              </Heading>
              <Text color={secondaryTextColor}>
                This is a short description about your project.
                A goose shows up at your house. What are you
                going to do about it? Perish? Better count
                your days, friend.
              </Text>
            </Stack>

            <HStack spacing={3}>
              <Button variant="outline" size="lg">
                take me to the extension
              </Button>
            </HStack>
        </VStack>
      </Container>
    </Container>
  )
}

export default Hero;