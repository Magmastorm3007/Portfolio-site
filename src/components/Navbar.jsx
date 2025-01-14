import React from 'react';
import {
  Flex,
  useColorMode,
  chakra,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

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
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={4}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
    >
      {/* Hamburger Menu */}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
          display={{ base: 'flex', md: 'none' }} // Show only on smaller screens
          ml={2}
        />
        <MenuList width="100%" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
          {['/', '/projects', '/work', '/contact'].map((path, index) => {
            const labels = ['Home', 'Projects', 'Experience', 'Contact'];
            return (
              <MenuItem
                key={index}
                as={Link}
                to={path}
                width="100%" // Ensure the menu items take full width
                _hover={{
                  bg: colorMode === 'light' ? 'yellow.200' : 'blue.800',
                }}
                {...linkContainerStyles[colorMode]}
                style={disableTextHighlight}
                textAlign="center" // Center the text within the item
              >
                {labels[index]}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>

      {/* Desktop Navigation Links */}
      <Flex
        display={{ base: 'none', md: 'flex' }} // Hide on smaller screens
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        {['/', '/projects', '/work', '/contact'].map((path, index) => {
          const labels = ['Home', 'Projects', 'Experience', 'Contact'];
          return (
            <chakra.div
              key={index}
              as={Link}
              to={path}
              p={2}
              borderRadius="md"
              className="nav-link"
              _hover={{
                bg: colorMode === 'light' ? 'yellow.200' : 'blue.800',
              }}
              {...linkContainerStyles[colorMode]}
              style={disableTextHighlight}
              mx={2}
            >
              {labels[index]}
            </chakra.div>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
