import React from 'react';
import { Flex, useColorMode, chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode } = useColorMode();

  // Define styles for the link containers based on the color mode
  const linkContainerStyles = {
    light: {
      color: 'gray.800',
      bg: 'transparent',
    },
    dark: {
      color: 'gray.300',
      bg: 'transparent',
    },
  };

  // CSS styles to disable blue text highlight on link click
  const disableTextHighlight = {
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  };

  return (
    <Flex as="nav" justifyContent="center" alignItems="center" py={4}>
      <chakra.div
        as={Link}
        to="/"
        p={2}
        borderRadius="md"
        className='nav-link'
        _hover={{ bg: colorMode === 'light' ? 'yellow.200' : 'blue.800' }}
        {...linkContainerStyles[colorMode]}
        style={disableTextHighlight} // Disable blue text highlight on link click
      >
        Home
      </chakra.div>

      <chakra.div
        as={Link}
        to="/projects"
        p={2}
        borderRadius="md"
        className='nav-link'
        _hover={{ bg: colorMode === 'light' ? 'yellow.200' : 'blue.800' }}
        {...linkContainerStyles[colorMode]}
        style={disableTextHighlight} // Disable blue text highlight on link click
      >
        Projects
      </chakra.div>

      <chakra.div
        as={Link}
        to="/contact"
        p={2}
        borderRadius="md"
        className='nav-link'
        _hover={{ bg: colorMode === 'light' ? 'yellow.200' : 'blue.800' }}
        {...linkContainerStyles[colorMode]}
        style={disableTextHighlight} // Disable blue text highlight on link click
      >
        Contact
      </chakra.div>
    </Flex>
  );
};

export default Navbar;
