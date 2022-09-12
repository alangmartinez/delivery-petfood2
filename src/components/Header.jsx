import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function Header() {
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);
  const [sticky, setSticky] = useState(false);

  //  Changing the styles of the header when scrolling
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setSticky(true) : setSticky(false);
  });

  return (
    <Box
      position="sticky"
      top={0}
      boxShadow={sticky ? "dark-lg" : ""}
      bgColor={sticky ? "blackAlpha.700" : "transparent"}
      backdropFilter="auto"
      backdropBlur={sticky ? "4px" : null}
      w="full"
      zIndex="sticky"
      transition="450ms ease all"
      paddingY={4}
      color={sticky ? "whiteAlpha.900" : "blackAlpha.900"}
    >
      <Container maxW="8xl" w="100%">
        {isLargerThan1280 ? <DesktopNavBar /> : <MobileNavBar />}
      </Container>
    </Box>
  );
}
