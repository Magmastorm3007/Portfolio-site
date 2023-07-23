import { ChakraProvider, ColorModeScript, DarkMode } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("yellow.100", "#222625")(props),
        margin:0,
      },
    }),
  },
});

export function ChakraSetup({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={DarkMode} />
      {children}
    </ChakraProvider>
  );
}
