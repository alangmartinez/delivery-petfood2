import { Box, ChakraProvider, Container, Heading, Img } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Home from "./screens/Home";
import Dogs from "./screens/Dogs";
import Help from "./screens/Help";
import CartContextProvider from "../context/cart";
import theme from "../styles/theme";
import Cats from "./screens/Cats";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Box marginTop={12} height='100%'>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route path="dogs" element={<Dogs />} />
              <Route path="cats" element={<Cats />} />
              <Route path="help" element={<Help />} />
              <Route
                path="*"
                element={
                  <Container centerContent maxWidth="container.xl">
                    <Heading fontWeigth="bold">
                      Error 404.
                      <br /> Nothing found.
                    </Heading>
                  </Container>
                }
              />
            </Routes>
          </Box>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
