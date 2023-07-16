import { useColorMode, Switch, Flex, Icon } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <Flex align="center">
      {colorMode === 'dark' ? (
        <MoonIcon mr={2} />
      ) : (
        <SunIcon mr={2} />
      )}
      <Switch
        colorScheme="teal"
        isChecked={colorMode === 'dark'}
        onChange={handleToggle}
      />
    </Flex>
  );
};

export default ColorMode;
