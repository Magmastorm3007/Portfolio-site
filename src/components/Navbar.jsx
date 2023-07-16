import React from 'react';
import { Flex, Box, Link, useColorMode } from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navbarBgColor = {
    light: 'red.100',
    dark: '#29292e',
  };

  const navbarTextColor = {
    light: 'black',
    dark: 'white',
  };

  const navbarHoverStyles = {
    light: {
      bg: 'orange.500',
      color: 'white',
    },
    dark: {
      bg: 'gray.700',
      color: 'white',
    },
  };

  return (
    <Flex
      as="nav"
      bg={navbarBgColor[colorMode]}
      p="5"
      rounded="full"
      zIndex="sticky"
    >
      <Box flex="0.5">
       
      </Box>
      <Box>
        <Link
          href="#"
          color={navbarTextColor[colorMode]}
          _hover={navbarHoverStyles[colorMode]}
          px="3"
          py="2"
          rounded="md"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="medium"
          mr="4"
        >
          Home
        </Link>
        <Link
          href="#"
          color={navbarTextColor[colorMode]}
          _hover={navbarHoverStyles[colorMode]}
          px="3"
          py="2"
          rounded="md"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="medium"
          mr="4"
        >
          About Me
        </Link>
        <Link
          href="#"
          color={navbarTextColor[colorMode]}
          _hover={navbarHoverStyles[colorMode]}
          px="3"
          py="2"
          rounded="md"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="medium"
        >
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
