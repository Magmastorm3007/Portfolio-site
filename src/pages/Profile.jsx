import { Box, Text, Image, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Profile = () => {
  const { colorMode } = useColorMode();
  const MotionBox = motion(Box);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const bgColor = {
    light: 'white',
    dark: 'gray.800',
  };

  const textColor = {
    light: 'black',
    dark: 'white',
  };

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 1.25 }}
      p={4}
      borderRadius="md"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      boxShadow="lg"
      
      alignItems="center"
    >
      <Image
        src="/vite.svg"
        alt="Profile Photo"
        borderRadius="full"
        boxSize="5vw"
        mr={4}
      />

      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={1}>
          Profile
        </Text>
        <Text fontSize="md" mb={2}>
          I am a MERN stack developer and a game developer in Unity.
        </Text>
      </Box>
    </MotionBox>
  );
};

export default Profile;
