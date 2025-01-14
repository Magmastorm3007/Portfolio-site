import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

function WorkExperience() {
  const containerColor = useColorModeValue('orange.400', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const experience = [
    {
      title: 'Graduate Engineer, LTIMindtree',
      date: 'Dec 2024 – Present, India',
      description: 'Engaged in comprehensive training programs focusing on advanced Data Engineering methodologies, AWS cloud infrastructure, and software development technologies with an emphasis on big data analytics and scalable solutions.',
    },
    {
      title: 'Freelance Developer | Consultant,Samagra Shiksha Meghalaya',
      date: 'Jun 2024 – Nov 2024, India',
      description: ' An educational management platform for Samagra Shiksha Meghalaya, planning data sharding strategies to enhance system performance and scalability. Successfully onboarded 200 registered users during the initial phase, developing customized dashboard interfaces for multi-tier administrative levels, enabling data-driven decision-making and organizational insights.',
    },
    {
      title: 'Software Development Intern, HumanAI Singapore',
      date: 'Dec 2023 – Jun 2024, Singapore',
      description: 'Contributed in the development of an IoT-integrated water monitoring dashboard using React.js and Material UI, facilitating real-time data visualization. Contributed to blockchain infrastructure development using Hyperledger, implemented Web3 backend services with hyperledger deployment, and integrated OpenAI GPT-4 API for sophisticated data analysis and intelligent recipe comparison.',
    },
    {
      title: 'Software Development Intern, Kanoe Soft Solutions',
      date: 'Jun 2023 – Jul 2023, Delhi, India',
      description: 'Executed system optimization by resolving compatibility challenges in a legacy .NET XML parsing system for documents, achieving zero downtime and 100% system reliability in systems after fixing installation scripts. Leveraged Python for comprehensive data extraction and analysis, generating actionable insights to streamline organizational document management and reduce data redundancy.',
    },
  ];

  return (
    <Box p={{ base: 4, md: 6 }} boxShadow="md" borderRadius="md" bg={containerColor}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={5} color="white">
        Professional Experience 
      </Text>
      <Box p={4} boxShadow="sm" borderRadius="md" bg={useColorModeValue('gray.100', 'gray.800')}>
        <AnimatePresence>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={2} color={useColorModeValue('blue.700', 'blue.300')}>
                {exp.title}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor} mb={2} fontStyle="italic">
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
