import {
  VStack, Heading, Text, Stack,
  HStack, Button, Container,
  useColorMode, useColorModeValue,
}  from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';


const Hero = () => {
  const accentColor = '#EE9F29';
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
              <Text fontWeight='bold' fontSize="xl">Honk!</Text>
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
                Focused, Friendly <br /> Learning.
              </Heading>
              <Text color={secondaryTextColor}>
                <b>Learning</b> is hard. <b>Distractions</b> are easy.
                Sometimes we need a goose to remind us
                when we start getting sidetracked.
                <b> Honk!</b> is that goose.
              </Text>
            </Stack>

            <HStack spacing={3}>
              <Button
                rightIcon={ <ExternalLinkIcon />}
                border={"2px"}
                borderColor={accentColor}
                color={accentColor}
                variant="outline" size="lg"
                _hover={{ backgroundColor: accentColor, color: "white"}}
              >
                Chrome Extension
              </Button>
            </HStack>
        </VStack>
      </Container>
    </Container>
  )
}

export default Hero;