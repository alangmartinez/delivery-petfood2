import {
  Container,
  Heading,
  HStack,
  StackDivider,
  VStack,
  Text,
  theme,
} from "@chakra-ui/react";
import Social from "./Social";

export default function Footer() {
  return (
    <footer>
      <HStack
        divider={<StackDivider bgColor="white" />}
        w="full"
        bgColor="blackAlpha.800"
        paddingX={16}
        paddingY={10}
        boxShadow="dark-lg"
        justify="space-between"
        zIndex={100}
        position="absolute"
        bottom={0}
      >
        <VStack fontFamily={theme.fonts.body} alignItems="start" spacing={2}>
          <Heading as="h5" fontSize="20" color='white'>
            Sobre Nosotros
          </Heading>
          <VStack color='whiteAlpha.900' alignItems='start'>
            <Text>Historia</Text>
            <Text>Logros</Text>
            <Text>Nuestro Equipo</Text>
            <Text>Mapa</Text>
          </VStack>
        </VStack>
        <VStack fontFamily={theme.fonts.body} alignItems="start" spacing={2}>
          <Heading as="h5" fontSize="md">
            Categorias
          </Heading>
          <Text>Dog</Text>
          <Text>Cat</Text>
          <Text>Market</Text>
          <Text>Help</Text>
        </VStack>
        <VStack spacing={6} alignItems="start">
          <Heading as="h5" fontSize="lg" fontFamily={theme.fonts.body}>
            Follow us :
          </Heading>
          <Social size={6} color='white' />
        </VStack>
      </HStack>
    </footer>
  );
}
