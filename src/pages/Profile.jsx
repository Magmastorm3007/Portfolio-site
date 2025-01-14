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
      transition={{ duration: 0.5 }} // Faster fade-in effect
      p={{ base: 4, md: 6 }} // Responsive padding
      borderRadius="md"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      maxW={{ base: '100%', md: '80%', lg: '60%' }} // Responsive width
      mx="auto" // Center on the page
      mt={4}
      textAlign={{ base: 'center', md: 'left' }} // Center text on mobile, left-align on larger screens
    >
      <Box p={{ base: 4, md: 6 }} borderRadius="md">
        <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mb={4}>
          About Me!
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} mb={2}>
        I am a passionate Software Engineer with a strong foundation in web development,data engineering and game development. I enjoy building creative and user-friendly software solutions that solve real-world problems. I am eager to learn and grow within a dynamic environment and contribute to innovative projects.
        </Text>
      </Box>
    </MotionBox>
  );
};

export default Profile;
