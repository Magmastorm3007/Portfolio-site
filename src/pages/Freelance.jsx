import React from 'react';
import { Box,Flex, Grid, GridItem, Text, useColorModeValue, Image, Button,useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

function Freelance() {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'Set-Memory',
      website: 'https://www.npmjs.com/package/set-memory',
      description: 'Set Node Options to limit memory for node applications as per its system free-use memory',
      image: '9.png',
    },
 
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const headColor = useColorModeValue('black', 'white');
  const textColor = 'darkblue';

  return (
    <Box p={{ base: 4, md: 6 }} boxShadow="md" borderRadius="md" bg={containerColor}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={5} color="white">
        Projects
      </Text>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
          {projects.map((project, index) => (
            <GridItem key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box p={4} boxShadow="sm" borderRadius="md" bg="gray.100">
                  <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={2} color="gray.700">
                    {project.title}
                  </Text>
                  <Flex justify="center" align="center" mb={2}>
    <Image
      src={project.image}
      alt={project.title}
      height="150px"
      objectFit="cover"
      borderRadius="md"
    />
  </Flex>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor} noOfLines={3}>
                    {project.description}
                  </Text>
                  <Button
      as="a"
      href={project.website}
      display="flex"
      alignItems="center"
      bg={colorMode === 'light' ? 'orange.300' : 'red.300'}
      _hover={{ bg: colorMode === 'light' ? 'orange.500' : 'red.500' }}
      borderRadius="md"
      color="white"
      mt={2}
      textDecoration="none" // Ensures no underline
      _focus={{ boxShadow: 'none' }} // Removes the focus outline
    >
      <FiExternalLink style={{ marginRight: '0.2rem' }} />
      Link
    </Button>
                </Box>
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}

export default Freelance;
