import React from 'react';
import { Box, Flex, IconButton, Icon, Input, Text, useToast, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the appropriate icons

const ContactPage = () => {
  const toast = useToast();
  const textColor = useColorModeValue('black', 'white');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission and email redirection
    // Replace the next line with your actual email address
    const email = 'your-email@example.com';
    window.location.href = `mailto:${email}?subject=Contact Form Submission&body=Name: ${e.target.name.value}%0D%0AEmail: ${e.target.email.value}%0D%0AMessage: ${e.target.message.value}`;
    // Show a success toast to the user
    toast({
      title: 'Form submitted successfully!',
      description: 'We will get back to you soon.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    // Reset the form fields
    e.target.reset();
  };

  return (
    <Box p={8}>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Contact Me On
      </Text>
      {/* Row with icons */}
      <Flex justifyContent="center" mb={4}>
        {/* Use the actual icon components */}
        <IconButton
          icon={<FaGithub />}
          aria-label="GitHub"
          size="lg"
          isRound
        />
        <IconButton
          icon={<FaLinkedin />}
          aria-label="LinkedIn"
          size="lg"
          isRound
        />
        {/* Add more IconButton components for other icons */}
      </Flex>

      <Box
        p={4}
        boxShadow="md"
        borderRadius="md"
        bgGradient="linear(to-r, yellow.400, pink.500, red.500)"
        color="white"
      >
        <form onSubmit={handleFormSubmit}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Send a Message
          </Text>
          <Flex flexDirection="column" mb={4}>
            <Text>Email Address</Text>
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              bg="white" // Set background color to white
              color="black" // Set text color to black
            />
          </Flex>
          <Flex flexDirection="column" mb={2}>
            <Text>Message</Text>
            <Input
              placeholder="Your Message"
              name="message"
              as="textarea"
              rows={4}
              resize="none"
              bg="white" // Set background color to white
              color="black" // Set text color to black
            />
          </Flex>
          <Flex justifyContent="flex-end">
            <button type="submit" bg="teal.500" color="white" px={8} py={2} rounded="md">
              Submit
            </button>
          </Flex>
        </form>
      </Box>
      <Text mt={4} textAlign="center" color={textColor}>
        Or call me at: +1 (123) 456-7890
      </Text>
    </Box>
  );
};

export default ContactPage;
