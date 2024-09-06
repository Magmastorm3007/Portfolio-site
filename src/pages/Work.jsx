import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

function WorkExperience() {
  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.700');

  const experience = [
    {
      title: 'Freelance Developer/Consultant',
      date: 'Jun 2024 – present, India',
      description: 'Contributed to the architecture of a scalable school application for Samagra Shiksha, implementing state-based data sharding for performance optimization and future expansion. Created tailored dashboard views and interactive workbook sections for district, block, and cluster authorities to enhance data accessibility and self-paced learning.',
    },
    {
      title: 'Software Developer Trainee, HumanAI Singapore',
      date: 'Dec 2023 – Jun 2024, Singapore',
      description: 'Developed a remote water monitoring dashboard application using React.js and Material UI connecting IoT data with the dashboard. Also helped set up the infrastructure for Hyperledger Private Blockchain and backend web3 services, and a React Web3 Based Frontend to interact with the deployed smart contracts. Assisted in the integration of Open AI GPT-4 API for recipe comparison and analysis.',
    },
    {
      title: 'Software Developer Trainee, Kanoe Soft Solutions',
      date: 'Jun 2023 – Jul 2023, Delhi, India',
      description: 'Resolved compatibility issues between a .NET legacy XML parser and current architecture, achieving 100% reduction in downtime. Generated reports on website response and used Python for data extraction from company documents, suggesting improvements to reduce profile redundancy.',
    },
  ];

  return (
    <Box p={{ base: 4, md: 6 }} boxShadow="md" borderRadius="md" bg={containerColor}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={5} color="white">
        Work Experience
      </Text>
      <Box p={4} boxShadow="sm" borderRadius="md" bg="gray.100">
        <AnimatePresence>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={2} color="blue.700">
                {exp.title}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor} mb={2}>
                {exp.date}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor} mb={4}>
                {exp.description}
              </Text>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default WorkExperience;
