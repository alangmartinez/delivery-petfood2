import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Section from "../../components/Section";
import oldCats from "../../assets/images/cats/gatos +7.jpg";
import adultCats from "../../assets/images/cats/gatos adultos.jpg";
import kittens from "../../assets/images/cats/kitten.jpg";
import specialCats from "../../assets/images/cats/gatos especiales.jpg";

export default function Cats() {
  return (
    <Box as="section" paddingX={10}>
      <VStack spacing={5}>
        <HStack spacing={5}>
          <Section img={oldCats} title="gatos +7" />
          <Section img={adultCats} title="adultos" />
        </HStack>
        <HStack spacing={5}>
          <Section img={specialCats} title="especiales" />
          <Section img={kittens} title="gatitos" />
        </HStack>
      </VStack>
    </Box>
  );
}
