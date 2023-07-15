import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="gray.800"
      p="5"
      rounded="full"
      /* Remove the position and top properties */
      zIndex="sticky"
    >
      <Box flex="1">
        <span className="text-white">Logo</span>
      </Box>
      <Box>
        <Link
          href="#"
          color="gray.300"
          _hover={{ bg: "gray.700", color: "white" }}
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
          color="gray.300"
          _hover={{ bg: "gray.700", color: "white" }}
          px="3"
          py="2"
          rounded="md"
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="medium"
          mr="4"
        >
          About Us
        </Link>
        <Link
          href="#"
          color="gray.300"
          _hover={{ bg: "gray.700", color: "white" }}
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
