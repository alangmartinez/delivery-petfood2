import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Karla, sans-serif",
    body: "sans-serif",
    standar: "monospace",
  },
  fontSizes: {
    custom: "36px",
  },
  colors: {
    primary: "white",
  },
  styles: {
    global: {
      body: {
        bg: "url(/images/background.jpg)",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
    },
  },
});

export default theme;
