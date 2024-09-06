import React from 'react';
import { Box, Heading, Container } from '@chakra-ui/react';
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
                .pauseFor(1500)
                .typeString('Web Developer | Game Developer')
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

        <Box mt={{ base: 4, md: 6 }}>
          <Profile />
        </Box>

        <Box mt={{ base: 4, md: 6 }}>
          <SkillSection />
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
