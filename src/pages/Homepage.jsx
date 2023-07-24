import React from 'react'
import { useState } from 'react';

import { Box, Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import { Canvas, useThree } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ColourMode from '../components/ColourMode';
import Profile from './/Profile';
import Model from '../components/Model';
import SkillSection from './Skills';

function Homepage() {
  return (
   <>
       <Box p={4} minH="30vh">
          <Heading>
          <Typewriter
           options={{
            cursor: '', // Set the cursor to an empty string to hide it
          }}
              onInit={(typewriter) => {
                typewriter
                .typeString('Hello World!')
                  .pauseFor(200)
                  .deleteAll()
                  .typeString('I am Shashwat ')

                  .pauseFor(200)  
                   .callFunction(() => {
            // After typing is completed, hide the cursor
            typewriter.typewriterHtml.classList.add('hidden-cursor');
          })
                 
                  .start();
              }}
            />
            <Typewriter
            options={{cursor:''}}
            
              onInit={(typewriter) => {
                typewriter
                
                .pauseFor(1500)
                  .typeString('Web Developer | Game Developer')
                  .callFunction(() => {z
                    // After typing is completed, hide the cursor
                    typewriter.typewriterHtml.classList.add('hidden-cursor');
                  })
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
        </Box></>
  )
}

export default Homepage