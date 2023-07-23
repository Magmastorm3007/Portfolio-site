import { Box, Text, useColorMode, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const Profile = () => {
  const { colorMode } = useColorMode();
  const MotionBox = motion(Box);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const bgColor = {
    light: 'orange.500',
    dark: 'gray.700',
  };

  const textColor = {
    light: 'white',
    dark: 'white',
  };

  
  useEffect(() => {
    
    setTimeout(() => {
      document.getElementById('motion-box').style.opacity = 1;
    }, 50);
  }, []);

  return (
    <MotionBox
      id="motion-box"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 0.5 }} // Decrease the duration for a faster fade-in effect.
      p={4}
      borderRadius="md"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      alignItems="center"
    >
      <Box p={4} borderRadius="md">
        <Heading as="h2" size="lg" mb={2}>
          About Me!
        </Heading>
        <Text fontSize="md" mb={2}>
          I am an experienced full stack web developer proficient in the MERN stack, adept at developing robust and scalable web applications. Additionally, I possess expertise in game development using Unity, allowing me to create immersive and interactive experiences across various platforms. With a strong background in both web and game development, I offer a versatile skill set to tackle diverse software development challenges.
        </Text>
      </Box>
    </MotionBox>
  );
};

export default Profile;
