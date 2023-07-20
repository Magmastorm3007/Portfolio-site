import React from 'react';
import { Flex, Box, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { colorMode } = useColorMode();

  const navbarClass = colorMode === 'dark' ? 'navbar navbar-dark' : 'navbar';

  return (
    <Flex as="nav" className={navbarClass}>
      <Box flex="0.5"></Box>
      <Box className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
