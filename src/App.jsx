import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box,Heading } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react";
import './App.css'
import Typewriter from "typewriter-effect";
import { useColorMode } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Container minW="container.xl" >
      <Box p={4} bg="yellow.50" minH="95vh">
        <Navbar />

        <Heading >
        <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("Hello I am Shashwat")
         .pauseFor(200)
         .deleteAll()
         .typeString("Web Developer|Game Developer")
         .start();
 }}
/>
        </Heading>
      </Box>
     
    </Container>
  );
     
      
    </>
  )
}

export default App
