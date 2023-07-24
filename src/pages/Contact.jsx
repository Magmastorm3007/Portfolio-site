import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

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
} from '@chakra-ui/react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const { colorMode } = useColorMode();

  const reset = () => {
    setName('');
  };

  const mail = (e) => {
    e.preventDefault();
    e.target.reset();
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

  const animation = { opacity: 1 };
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animation.opacity = 1;
    }, 1);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={animation}>
      <Box p={6} rounded="lg" fontFamily="inter" bg={colorMode === 'light' ? 'orange.500' : 'gray.700'}>
        <Box pb={2} textAlign="center">
          <Heading fontSize="xl"  color='white' className="text-4xl font-bold">Contact Me</Heading>
        </Box>
        <Flex justifyContent="center" alignItems="center" py={2}>
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
        <form onSubmit={mail}>
          <FormControl>
            <FormLabel className="text-xl font-bold text-gray-600 uppercase">Full Name</FormLabel>
            <Input
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              bg="gray.300"
              color="black" // Set text color to black
              focusBorderColor="indigo.500"
              size="lg"
              rounded="md"
            />
          </FormControl>
          <FormControl mt={8}>
            <FormLabel className="text-xl font-bold text-gray-600 uppercase">Email</FormLabel>
            <Input
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="gray.300"
              color="black" // Set text color to black
              focusBorderColor="indigo.500"
              size="lg"
              rounded="md"
            />
          </FormControl>
          <FormControl mt={8}>
            <FormLabel className="text-xl font-bold text-gray-600 uppercase">Message</FormLabel>
            <Textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              bg="gray.300"
              color="black" // Set text color to black
              focusBorderColor="indigo.500"
              size="lg"
              rounded="md"
              rows={4}
            />
          </FormControl>
          <Button
            type="submit"
            mt={8}
            w="full"
            py={3}
            size="lg"
            fontWeight="bold"
            textTransform="uppercase"
            bg={colorMode === 'light' ? 'yellow.500' : 'blue.700'}
            color="white"
            rounded="md"
            _hover={{ bg: colorMode === 'light' ? 'yellow.300' : 'blue.900' }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </motion.div>
  );
};

export default Contact;
