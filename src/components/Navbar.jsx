import {
  Text,
  useMediaQuery,
  Icon,
  HStack,
  Container,
  Box,
  VStack,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import { ImCart } from "react-icons/im";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);
  const { cart } = useContext(CartContext);

  const activeLink = ({ isActive }) => {
    return isActive
      ? { borderBottom: "2px solid", color: "whiteAlpha.200" }
      : undefined;
  };

  return (
    <Box
      position="fixed"
      top={0}
      boxShadow="dark-lg"
      bgColor="blackAlpha.800"
      w="full"
      zIndex={100}
      h="70px"
    >
      <Container maxW="8xl" w="100%">
          <HStack
            spacing={10}
            fontWeight='normal'
            textTransform="uppercase"
            fontSize="16px"
            fontFamily="heading"
            color='whiteAlpha.900'
            justify='end'
          >
            <NavLink to="/" style={activeLink}>
              <Text cursor="pointer" paddingY={5}>
                Home
              </Text>
            </NavLink>
            <NavLink to="/dogs" style={activeLink}>
              <Text cursor="pointer" paddingY={5}>
                Dog
              </Text>
            </NavLink>
            <NavLink to="/cats" style={activeLink}>
              <Text cursor="pointer" paddingY={5}>
                Cat
              </Text>
            </NavLink>
            <NavLink to="/market" style={activeLink}>
              <Text cursor="pointer" paddingY={5}>
                Market
              </Text>
            </NavLink>
            <NavLink to="/news" style={activeLink}>
              <Text textTransform="uppercase" cursor="pointer" paddingY={5}>
                News
              </Text>
            </NavLink>
            <NavLink to="/about-us" style={activeLink}>
              <Text textTransform="uppercase" cursor="pointer" paddingY={5}>
                About Us
              </Text>
            </NavLink>
            <NavLink to="/help" style={activeLink}>
              <Text cursor="pointer" paddingY={5}>
                Help
              </Text>
            </NavLink>
          </HStack>

          {cart.length > 0 && (
            <Icon
              as={ImCart}
              color="white"
              cursor="pointer"
              position="absolute"
              right={10}
            ></Icon>
          )}
      </Container>
    </Box>
  );
}
