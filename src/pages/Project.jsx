import React from 'react';
import { Box, Grid, GridItem, Text, useColorModeValue, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Project() {
  const projects = [
    {
      title: 'Project 1',
      website: 'https://www.example1.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '1.png', // Replace with the path to your image file
    },
    {
      title: 'Project 2',
      website: 'https://www.example2.com',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '2.png', // Replace with the path to your image file
    },
    {
        title: 'Project 3',
        website: 'https://www.example2.com',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '3.png', // Replace with the path to your image file
      },
      {
        title: 'Project 4',
        website: 'https://www.example2.com',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '4.png', // Replace with the path to your image file
      },
      {
        title: 'Project 5',
        website: 'https://www.example2.com',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '5.png', // Replace with the path to your image file
      },
      {
        title: 'Project 6',
        website: 'https://www.example2.com',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '6.png', // Replace with the path to your image file
      },
    // Add more projects with titles, websites, descriptions, and image paths
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const headcolor=useColorModeValue('black','white')
  const textColor = 'darkblue';

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg={containerColor}>
      <Text fontSize="xl" fontWeight="bold" mb={5} color={headcolor}>
        Projects
      </Text>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {projects.map((project, index) => (
            <GridItem key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box p={4} boxShadow="sm" borderRadius="md" bg="gray.100">
                  <Text fontSize="lg" fontWeight="bold" mb={2} color={textColor}>
                    {project.title}
                  </Text>
                  <Image src={project.image} alt={project.title} height="150px" objectFit="cover" mb={2} /> 
                  <Text fontSize="sm" color={textColor} noOfLines={3}>
                    {project.description}
                  </Text>
                  <a href={project.website} style={{ color: textColor }}>
                    Go to website
                  </a>
                </Box>
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}

export default Project;
