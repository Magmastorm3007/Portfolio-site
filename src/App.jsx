import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import './App.css';
import { Canvas, useThree } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ColourMode from './components/ColourMode';
import Profile from './pages/Profile';
import Model from './components/Model';
import SkillSection from './pages/Skills';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container minW="container.lg" minH="100vh">
        <ColourMode />

        <Box p={4} minH="10vh">
          <Navbar />
        </Box>

        <Box p={4} minH="30vh">
          <Heading>
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                .typeString('Hello World!')
                  .pauseFor(200)
                  .deleteAll()
                  .typeString('I am Shashwat ')
                  .pauseFor(200)
                 
                  .start();
              }}
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .pauseFor(1500)
                  .typeString('Web Developer | Game Developer')
                  .start();
              }}
            />
          </Heading>
         
              
          <Container minW="container.md">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Model url="monitor.glb" />
            </Canvas>

          </Container>

          <Profile/>
          <SkillSection/>
        </Box>
      </Container>
    </>
  );
}

export default App;
