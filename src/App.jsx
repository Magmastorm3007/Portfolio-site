import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import './App.css';
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ColourMode from './components/ColourMode';
import Profile from './pages/Profile';
import Model from './components/Model';

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
                  .typeString('Hello I am Shashwat')
                  .pauseFor(200)
                  .deleteAll()
                  .typeString('Web Developer|Game Developer')
                  .start();
              }}
            />
          </Heading>

          <Profile />
          <Model url="/tv.glb"/>
        </Box>
      </Container>
    </>
  );
}

export default App;
