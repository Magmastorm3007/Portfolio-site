import { useState, useEffect, useRef } from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  DiJavascript, DiUnitySmall, DiDatabase, DiMysql, DiLinux, DiReact, DiNodejs, 
  DiFirebase, DiCss3, DiHtml5, DiPhp, DiPython, DiBootstrap, DiGithub 
} from 'react-icons/di';
import { FaCuttlefish } from 'react-icons/fa';

const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
    >
      <Box p={{ base: 4, md: 6 }} boxShadow="md" borderRadius="md" bg="white">
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color={iconColor} mb={5} textAlign="center">
          Skills
        </Text>
        <Flex flexWrap="wrap" justifyContent="center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ 
                flexBasis: '20%', 
                textAlign: 'center', 
                marginBottom: '1rem', 
                padding: '0.5rem' 
              }}
            >
              <Box>
                <Icon 
                  as={skill.icon} 
                  boxSize={{ base: 8, md: 10 }} // Responsive icon size
                  color={iconColor} 
                />
                <Text 
                  mt={2} 
                  fontSize={{ base: 'sm', md: 'md' }} // Responsive text size
                  color={iconColor}
                >
                  {skill.name}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </motion.div>
  );
};

export default SkillSection;
