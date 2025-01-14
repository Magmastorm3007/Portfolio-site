import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Heading,
  useColorMode,
  Flex,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const Contact = () => {
  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const { colorMode } = useColorMode();

  // Reset form data
  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const mail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: 'Validation Error',
        description: 'All fields are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    emailjs
      .sendForm('service_dmimtja', 'template_jve3fog', e.target, 'QRmgbLck8DSx7As5o')
      .then((result) => {
        console.log(result.text);
        toast({
          title: 'Form submitted successfully!',
          description: 'We will get back to you soon.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error.text);
        toast({
          title: 'Error',
          description: 'An error occurred. Please try again later.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });

    reset();
  };

  // Animation setup
  const animation = { opacity: 1 };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animation.opacity = 1;
    }, 1);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={animation}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        p={{ base: 4, md: 6 }}
        boxShadow="md"
        borderRadius="md"
        bg={containerColor}
        maxW="container.lg" // Set max width to 'container.lg' for responsiveness
        mx="auto"
        my={{ base: 4, md: 8 }}
        display="flex"
        flexDirection={{ base: 'column', md: 'grid' }} // Change to grid for desktop layout
        alignItems="center"
        gridTemplateColumns={{ base: '1fr', md: '1fr 2fr' }} // Define grid columns for desktop
        overflow="hidden" // Prevent horizontal scrolling
      >
        <Box pb={2} textAlign="center" width="100%">
          <Heading fontSize={{ base: 'xl', md: '2xl' }} color="white" className="text-4xl font-bold">
            Contact Me
          </Heading>
        </Box>
        <Flex justifyContent="center" alignItems="center" py={2} gridColumn="1 / span 1"> 
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="https://github.com/Magmastorm3007" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color={colorMode === 'light' ? 'white' : 'black'} />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} px={2}>
            <a href="https://www.linkedin.com/in/shashwat-nath-077128168/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color={colorMode === 'light' ? 'white' : 'black'} />
            </a>
          </motion.div>
        </Flex>
        <GridItem gridColumn="2 / span 1"> {/* Assign grid column for the form */}
          <form onSubmit={mail} style={{ width: '100%' }}>
            <FormControl mt={4} isRequired>
              <FormLabel color="white" fontWeight="bold">
                Full Name
              </FormLabel>
              <Input
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="gray.300"
                color="black"
                focusBorderColor="indigo.500"
                size="lg"
                rounded="md"
                _hover={{ bg: 'gray.200' }}
                width="100%"
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel color="white" fontWeight="bold">
                Email
              </FormLabel>
              <Input
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.300"
                color="black"
                focusBorderColor="indigo.500"
                size="lg"
                rounded="md"
                _hover={{ bg: 'gray.200' }}
                width="100%"
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel color="white" fontWeight="bold">
                Message
              </FormLabel>
              <Textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg="gray.300"
                color="black"
                focusBorderColor="indigo.500"
                size="lg"
                rounded="md"
                rows={4}
                _hover={{ bg: 'gray.200' }}
                width="100%"
              />
            </FormControl>
            <Button
              type="submit"
              mt={8}
              w="full"
              py={3}
              size="lg"
              fontWeight="bold"
              bg={colorMode === 'light' ? 'blue.300' : 'red.300'}
              color={colorMode==='light'?'white':'white'}
              
              rounded="md"
              _hover={{ bg: colorMode === 'light' ? 'blue.500' : 'red.500' ,
                color:colorMode==='light'?'white':'white'
              }}
            >
              Send Message
            </Button>
          </form>
        </GridItem>
      </Box>
    </motion.div>
  );
};

export default Contact;