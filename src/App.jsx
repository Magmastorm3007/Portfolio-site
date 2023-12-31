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
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
 
  return (
    <>
     
      
      <Router>
      <Container minW="container.lg" minH="100vh">
        <ColourMode />
      
        <Box p={4} minH="10vh">
        
          <Navbar />
          <img src='cat.gif' height='2px'/>
        </Box>
        
         
      

    
        <Routes>
          <Route exact path="/" Component={Homepage}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route exact path="/projects" Component={Project}></Route>
        </Routes>
        </Container>
      </Router>
       
    
    
    </>
  );
}

export default App;
