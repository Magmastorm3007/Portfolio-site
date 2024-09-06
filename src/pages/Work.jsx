import React from 'react';
import { Box, Flex, Grid, GridItem, Text, useColorModeValue, Button, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

function WorkExperience() {
  const { colorMode } = useColorMode();
  const experience = [
    {
      title: 'Freelance Developer/Consultant',
      date: 'Jun 2024 – present, India',
      description: 'Contributed to the architecture of a scalable school application for Samagra Shiksha, implementing state-based data sharding for performance optimization and future expansion. Created tailored dashboard views and interactive workbook sections for district, block, and cluster authorities to enhance data accessibility and self-paced learning.',
    },
    {
      title: 'Software Developer Trainee, HumanAI Singapore',
      date: 'Dec 2023 – Jun 2024, Singapore',
      description: 'Developed a remote water monitoring dashboard application using React.js and Material UI connecting IOT data with the dashboard.I also helped setup the infrastructure for Hyperledger Private Blockchain and backend web3 services and a React Web3 Based Frontend to interact with the deployed smart contracts.I also assisted in integration of Open AI GPT-4 API for recipe comparision and analysis.',
    },
    {
      title: 'Software Developer Trainee, Kanoe Soft Solutions',
      date: 'Jun 2023 – Jul 2023, Delhi, India',
      description: 'Resolved compatibility issues between a .NET legacy XML parser and current architecture, achieving 100% reduction in downtime. Generated reports on website response and used Python for data extraction from company documents, suggesting improvements to reduce profile redundancy.',
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const headColor = useColorModeValue('black', 'white');
  const textColor = useColorModeValue('gray.700', 'gray.700');

  return (
    <Box p={{ base: 4, md: 6 }} boxShadow="md" borderRadius="md" bg={containerColor}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={5} color="white">
        Work Experience
      </Text>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }} gap={4}>
          {experience.map((exp, index) => (
            <GridItem key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box p={4} boxShadow="sm" borderRadius="md" bg="gray.100">
                  <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={2} color="blue.700">
                    {exp.title}
                  </Text>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor} mb={2}>
                    {exp.date}
                  </Text>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                    {exp.description}
                  </Text>
                </Box>
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}

export default WorkExperience;
