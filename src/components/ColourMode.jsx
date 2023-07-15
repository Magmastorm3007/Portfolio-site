import React from 'react'
import { ColorMode } from '@chakra-ui/react'
function ColourMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
}

export default ColourMode