import { Box, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import Section from "../../components/Section";
import olderDogs from "../../assets/images/dogs/perros +7.jpg";
import adultDogs from "../../assets/images/dogs/perros adultos.jpg";
import puppys from "../../assets/images/dogs/perros cachorros.jpg";
import specialDogs from "../../assets/images/dogs/perros especiales.jpg";

export default function Dogs() {
  return (
    <Box as="section" paddingX={10}>
      <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr" gap={5}>
        <GridItem colStart={1} colEnd={2}>
          <Section img={olderDogs} title="perros +7" />
        </GridItem>
        <GridItem colStart={2} colEnd={3}>
          <Section img={adultDogs} title="adultos" />
        </GridItem>
        <GridItem>
          <Section img={specialDogs} title="especiales" />
        </GridItem>
        <GridItem>
          <Section img={puppys} title="cachorros" />
        </GridItem>
      </Grid>
    </Box>
  );
}
