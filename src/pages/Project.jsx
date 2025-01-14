import React from 'react';
import { Box, Flex, Grid, GridItem, Text, useColorModeValue, Button, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaNodeJs, FaReact, FaUnity } from 'react-icons/fa';

function Project() {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'Set-Memory',
      website: 'https://www.npmjs.com/package/set-memory',
      description: 'An NPM package designed to automatically manage memory allocation for Node.js applications with flexible configuration options.',
      icon: <FaNodeJs size={40} color="#68A063" />
    },
    {
      title: 'Chatroom',
      website: 'https://magmastorm3007.github.io/superchat/',
      description: 'A responsive real-time chat application implemented using Firebase and WebSocket technologies, optimized for desktop and mobile interfaces.',
      icon: <FaReact size={40} color="#61DAFB" />
    },
    {
      title: 'Pixel Art Maker',
      website: 'https://magmastorm3007.github.io/PixelArtMaker',
      description: 'An interactive React application enabling users to create and export pixel art seamlessly across mobile and desktop platforms.',
      icon: <FaReact size={40} color="#61DAFB" />
    },
    {
      title: 'Ninja Araki',
      website: 'https://magmastorm.itch.io/ninja-araki',
      description: 'A 2D action platformer game featuring custom-designed assets and innovative gameplay mechanics developed in Unity3D.',
      icon: <FaUnity size={40} color="#222C37" />
    },
    {
      title: 'Eldian Defiance',
      website: 'https://magmastorm.itch.io/eldian-defiance',
      description: 'A strategically designed game inspired by Attack on Titan, utilizing advanced trajectory systems with precise mathematical calculations.',
      icon: <FaUnity size={40} color="#222C37" />
    },
    {
      title: 'Phantom Rush',
      website: 'https://magmastorm.itch.io/phantom-rush',
      description: 'An immersive endless runner game challenging players to achieve maximum scores by strategically dodging dynamic enemy obstacles.',
      icon: <FaUnity size={40} color="#222C37" />
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box p={{ base: 4, md: 6 }} boxShadow="md" borderRadius="md" bg={containerColor}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={5} color="white">
        Personal Projects
      </Text>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
          {projects.map((project, index) => (
            <GridItem key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box 
                  p={4} 
                  boxShadow="sm" 
                  borderRadius="md" 
                  bg={useColorModeValue('gray.100', 'gray.800')} 
                  h="100%" 
                  display="flex" 
                  flexDirection="column"
                >
                  <Flex alignItems="center" mb={3}>
                    {project.icon}
                    <Text 
                      ml={3} 
                      fontSize={{ base: 'md', md: 'lg' }} 
                      fontWeight="bold" 
                      color={useColorModeValue('blue.700', 'white')}
                    >
                      {project.title}
                    </Text>
                  </Flex>
                  <Text 
                    fontSize={{ base: 'sm', md: 'md' }} 
                    color={textColor} 
                    mb={3} 
                    noOfLines={3}
                  >
                    {project.description}
                  </Text>
                  <Button
  as="a"
  href={project.website}
  display="flex"
  alignItems="center"
  bg={colorMode === 'light' ? 'blue.500' : 'red.300'}
  _hover={{ 
    bg: colorMode === 'light' ? 'blue.600' : 'red.500',
    color:colorMode==='light'?'white':'white' 

  }}
  borderRadius="md"
  color="white"
  mt="auto"
  textDecoration="none"
  _focus={{ boxShadow: 'none' }}
>
  <FiExternalLink style={{ marginRight: '0.2rem' }} />
  Project Link
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
