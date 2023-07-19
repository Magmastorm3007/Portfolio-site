import React from 'react';
import { Flex, Box, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
    <Flex as="nav" bg={navbarBgColor[colorMode]} p="5" rounded="full" zIndex="sticky">
      <Box flex="0.5"></Box>
      <Box>
        <Link
          to="/"  // Use "to" instead of "href" in react-router-dom
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
          to="/projects"  // Use "to" instead of "href" in react-router-dom
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
          Projects
        </Link>
        <Link
          to="/contact"  // Use "to" instead of "href" in react-router-dom
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
