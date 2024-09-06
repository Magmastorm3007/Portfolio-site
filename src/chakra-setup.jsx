import { ChakraProvider, ColorModeScript, DarkMode } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark", // Set dark mode as default
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("yellow.100", "#222625")(props), // Use light bg for light mode and dark bg for dark mode
        margin: 0,
        color: mode("black", "white")(props), // Use black text for light mode and white text for dark mode
      },
    }),
  },
});

export function ChakraSetup({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      {children}
    </ChakraProvider>
  );
}
