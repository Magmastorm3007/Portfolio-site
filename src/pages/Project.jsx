import React from 'react';
import { Box, Grid, GridItem, Text, useColorModeValue, Image,Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi'; 
function Project() {
  const projects = [
    {
      title: 'Bookstore App',
      website: 'https://magmastorm3007.github.io/OnlineBookStore/',
      description: 'BookStore Web App with CRUD, Auth and Payment Gateway implemented with my own book database.',
      image: '1.png',
    },
    {
      title: 'Chatroom',
      website: 'https://magmastorm3007.github.io/superchat/',
      description: 'Chat-App implemented with Firebase and Web Socket, Built with React with Desktop and Mobile mode.',
      image: '2.png',
    },
    {
      title: 'Pixel Art Maker',
      website: 'https://magmastorm3007.github.io/PixelArtMaker',
      description: 'A React Application built using paint library to create Pixel Art and readily export it on mobile devices.',
      image: '3.png',
    },
    {
      title: 'Customize 3D-Shirt',
      website: 'https://magmastorm3007.github.io/3D-Product-GPT',
      description: 'A tutorial app for three-js where you may customize shirt and paint textures and logos as well as use DALL-E API',
      image: '8.png',
    },
    {
      title: 'MyWeather',
      website: 'https://magmastorm3007.github.io/MyWeatherApp/',
      description: 'A React application that can fetch current weather conditions from any part of the world using Open Weather REST API',
      image: '7.png',
    },
      {
        title: 'Ninja Araki',
        website: 'https://magmastorm.itch.io/ninja-araki',
        description:
          'Ninja Araki is a 2D action platformer game built with custom created assets and gameplay systems using Unity3D',
        image: '4.png', // Replace with the path to your image file
      },
      {
        title: 'Eldian Defiance',
        website: 'https://magmastorm.itch.io/eldian-defiance',
        description:
          'A game inspired by attack on titan that uses trajectory system based on mathematical calculations made in Unity3D',
        image: '5.png', // Replace with the path to your image file
      },
      {
        title: 'Phantom Rush',
        website: 'https://magmastorm.itch.io/phantom-rush',
        description:
          'An Endless Runner where you have get the highest score by dodging enemies,made in Unity Engine 3D',
        image: '6.png', // Replace with the path to your image file
      },

      {
        title: 'Set-Memory',
        website: 'https://www.npmjs.com/package/set-memory',
        description:
          'Set Node Options to limit memory for node applications as per its system freeuse memory',
        image: '9.png', // Replace with the path to your image file
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
      <Text fontSize="xl" fontWeight="bold" mb={5} color='white'>
        Projects
      </Text>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {projects.map((project, index) => (
            <GridItem key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box p={4} boxShadow="sm" borderRadius="md" bg="gray.100">
                  <Text fontSize="lg" fontWeight="bold" mb={2} color='gray.700'>
                    {project.title}
                  </Text>
                  <Image src={project.image} alt={project.title} height="150px" objectFit="cover" mb={2} /> 
                  <Text fontSize="sm" color={textColor} noOfLines={3}>
                    {project.description}
                  </Text>
                  <Button
      as="a"
      href={project.website}
      display="flex"
      alignItems="center"
      colorScheme="red" // Sets the button color to red
      _hover={{ color: 'white', backgroundColor: 'red.500' }} // Adds hover effects
      borderRadius="md" // Rounds the button corners
      p="0.5rem 1rem" // Adds padding
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

export default Project;
