import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { DiJavascript, DiUnitySmall, DiDatabase, DiMysql, DiLinux, DiReact, DiNodejs, DiFirebase, DiCss3, DiHtml5, DiPhp, DiPython, DiBootstrap, DiGithub } from 'react-icons/di';
import { FaCuttlefish } from 'react-icons/fa';

const SkillSection = () => {
  
  const iconColor = 'gray.700';

  const skills = [
    { name: 'C++', icon: FaCuttlefish },
    { name: 'JavaScript', icon: DiJavascript },
    { name: 'HTML5', icon: DiHtml5 },
    { name: 'PHP', icon: DiPhp },
    { name: 'Python', icon: DiPython },
    { name: 'React', icon: DiReact },
    { name: 'CSS', icon: DiCss3 },
    { name: 'Bootstrap', icon: DiBootstrap },
    { name: 'Node.js', icon: DiNodejs },
    { name: 'Unity', icon: DiUnitySmall },
    { name: 'MongoDB', icon: DiDatabase },
    { name: 'MySQL', icon: DiMysql },
    { name: 'Firebase', icon: DiFirebase },
    { name: 'GitHub', icon: DiGithub },
    { name: 'Linux', icon: DiLinux },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      <Box p={4} boxShadow="md" borderRadius="md" bg="white">
        <Text fontSize="xl" fontWeight="bold" color={iconColor} mb={5}>
          Skills
        </Text>
        <Flex flexWrap="wrap">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ flexBasis: '20%', textAlign: 'center', marginBottom: '1rem' }}
            >
              <Box>
                <Icon as={skill.icon} boxSize={8} color={iconColor} />
                <Text mt={2}  color={iconColor}>{skill.name}</Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </motion.div>
  );
};

export default SkillSection;
