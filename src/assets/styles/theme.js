import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: 'Raleway',
        body: 'sans-serif',
        standar: 'monospace',
    },
    fontSizes: {
        custom: '36px',
    },
    colors: {
        primary: 'white'
    }
});


export default theme;