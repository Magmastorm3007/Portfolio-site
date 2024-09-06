import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Heading, Container } from '@chakra-ui/react';
import { Canvas, useThree } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ColourMode from './components/ColourMode';
import Profile from './pages/Profile';
import Model from './components/Model';
import SkillSection from './pages/Skills';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';

import Project from './pages/Project';
import Freelance from './pages/Freelance';
import WorkExperience from './pages/Work';

function App() {
  return (
    <>
      <Router>
        <Container 
          minW={{ base: "100%", md: "container.md", lg: "container.lg" }} 
          minH="100vh"
          p={{ base: 2, md: 4 }}
          maxW="100%"  // Ensures no horizontal overflow
        >
          <ColourMode />
          <Box 
            p={4} 
            minH="10vh" 
            display="flex" 
            flexDirection={{ base: "column", md: "row" }} 
            alignItems="center"
            justifyContent="space-between" // Ensures proper spacing between items on larger screens
            textAlign={{ base: "center", md: "left" }} // Centers text on mobile
          >
            <Navbar />
           
            <Box
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} // Responsive font size
            mt={2}
          >
             {/* Coffee emoji */}
          </Box>
            
          </Box>

          <Routes>
            <Route exact path="/" Component={Homepage}></Route>
         
            <Route exact path="/projects" Component={Project}></Route>
            <Route exact path="/contact" Component={Contact}></Route>
            <Route exact path="/freelance" Component={Freelance}></Route>
            <Route exact path="/work" Component={WorkExperience}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
