import React from 'react';
import { Box, Heading, Container,Flex } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar';
import ColourMode from '../components/ColourMode';
import Profile from './Profile';
import Model from '../components/Model';
import SkillSection from './Skills';

function Homepage() {
  return (
    <>
      <Box p={{ base: 4, md: 6 }} minH="30vh" textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
          <Typewriter
            options={{ cursor: '' }} // Hide cursor
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello World!')
                .pauseFor(200)
                .deleteAll()
                .typeString('I am Shashwat')
                .pauseFor(200)
                .start();
            }}
          />
        </Heading>

        <Heading fontSize={{ base: "lg", md: "2xl" }} mb={4}>
          <Typewriter
            options={{ cursor: '' }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString('Software Engineer | Developer ')
                .start();
            }}
          />
        </Heading>

        <Container 
          maxW={{ base: "100%", md: "container.md" }} 
          mt={{ base: 4, md: 6 }}
          p={0}
          display="flex" 
          justifyContent="center"
        >
          <Canvas style={{ width: "100%", height: "400px" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model url="monitor.glb" />
          </Canvas>
        </Container>

        <Flex
        direction="column" // Stack items vertically
        align="center" // Center items horizontally
        maxW={{ base: '100%', md: 'container.lg' }} // Set max width for larger screens
        mx="auto" // Center the container
        gap={6} // Add space between the components
      >
        <Box>
          <Profile />
        </Box>

        <Box>
          <SkillSection />
        </Box>
      </Flex>

      </Box>
    </>
  );
}

export default Homepage;
