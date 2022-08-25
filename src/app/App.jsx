import { Box, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./screens/Home";
import Dogs from "./screens/Dogs";
import Help from "./screens/Help";
import background from "../assets/images/background.jpg";
import CartContextProvider from "../context/cart";
import theme from '../assets/styles/theme';
import Cats from "./screens/Cats";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <CartContextProvider>
        <BrowserRouter>
          <Box
            h="100vh"
            bgImage={background}
            bgPosition="center"
            bgSize="cover"
          >
            <Navbar />
            <Box paddingTop={32}>
              <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route path="dogs" element={<Dogs />}></Route>
                <Route path="cats" element={<Cats />}></Route>
                <Route path="help" element={<Help />}></Route>
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
                ></Route>
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
