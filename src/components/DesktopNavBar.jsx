import { HStack, Text, Icon, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/cart";

export default function DesktopNavBar() {
    const cart = useContext(CartContext);

  return (
    <HStack justify='space-between'>
      <Text fontWeight='normal' fontSize='3xl' >Super Mascota</Text>
      <HStack
        spacing={10}
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="xl"
        fontFamily="heading"
        justify="end"
      >
        <Link to="/">
          <Text cursor="pointer" paddingY={5}>
            Home
          </Text>
        </Link>
        <Link to="/dogs">
          <Text cursor="pointer" paddingY={5}>
            Dog
          </Text>
        </Link>
        <Link to="/cats">
          <Text cursor="pointer" paddingY={5}>
            Cat
          </Text>
        </Link>
        <Link to="/marke">
          <Text cursor="pointer" paddingY={5}>
            Market
          </Text>
        </Link>
        <Link to="/news">
          <Text textTransform="uppercase" cursor="pointer" paddingY={5}>
            News
          </Text>
        </Link>
        <Link to="/about-us">
          <Text textTransform="uppercase" cursor="pointer" paddingY={5}>
            About Us
          </Text>
        </Link>
        <Link to="/help">
          <Text cursor="pointer" paddingY={5}>
            Help
          </Text>
        </Link>
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
    </HStack>
  );
}
