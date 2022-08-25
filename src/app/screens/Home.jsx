import { Link } from "react-router-dom";
import { Text, Grid, GridItem, Img, Button, VStack } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import saleBanner from "../../assets/images/bigSale.jpg";
import dogs from "../../assets/images/dogs.jpg";
import cats from "../../assets/images/cats.jpg";

export default function Home() {

  const hoverEffectOnButton = {

  }


  return (
    <>
      <VStack spacing={12}>
        <SearchBar />
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          h="100%"
          maxHeight="500px"
          padding={4}
          gap={4}
        >
          <GridItem
            colStart={1}
            colEnd={3}
            rowStart={1}
            rowEnd={3}
            borderRadius="lg"
          >
            <Img
              src={saleBanner}
              borderRadius="lg"
              boxShadow="md"
              h="100%"
              w="100%"
              cursor="pointer"
            />
          </GridItem>
          <Link to="/dogs">
            <GridItem
              colSpan={1}
              rowSpan={1}
              position="relative"
              transition="ease-in-out 300ms"
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Img
                src={dogs}
                borderRadius="lg"
                boxShadow="md"
                h="100%"
                w="100%"
                cursor="pointer"
                sx={{ filter: 'grayScale(100%)', transition: 'ease 800ms'}}
                _hover={{ filter: 'grayScale(0%)'}}
              />
              <Button
                color="white"
                variant="unstyled"
                textTransform="uppercase"
                letterSpacing={2}
                fontSize="custom"
                position="absolute"
                left="50%"
                top="50%"
                sx={{ transform: "translate(-50%, -50%)" }}
              >
                Perros
              </Button>
            </GridItem>
          </Link>
          <Link to="/cats">
            <GridItem
              colStart={3}
              colEnd={4}
              position="relative"
              transition="ease-in-out 500ms"
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Img
                src={cats}
                borderRadius="lg"
                boxShadow="md"
                cursor="pointer"
                h="100%"
                w="100%"
                sx={{ filter: 'grayScale(100%)', transition: 'ease 800ms'}}
                _hover={{ filter: 'grayScale(0%)'}}
              ></Img>
              <Button
                color="white"
                variant="unstyled"
                textTransform="uppercase"
                letterSpacing={2}
                fontSize="custom"
                position="absolute"
                left="50%"
                top="50%"
                sx={{ transform: "translate(-50%, -50%)" }}
              >
                Gatos
              </Button>
            </GridItem>
          </Link>
          <GridItem fontFamily='standard' bgColor='gray.50' padding={4} borderRadius='lg'>
            <VStack>
              <Text>Medios de Pago</Text>
              <ul>
                <Text _after={{ content: '" Mercado Pago"', color: "yellow" }}>
                  Trabajamos con todos los medios de pago ofrecidos por
                </Text>
                <Text>Ademas aceptamos transferencia bancaria y descuentos por pago en efectivo.</Text>
              </ul>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
}
