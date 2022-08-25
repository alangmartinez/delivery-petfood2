import { Box, Image, Text } from "@chakra-ui/react";

export default function Section({ img, title }) {
  return (
    <Box
      position="relative"
      cursor="pointer"
      w="100%"
      _hover={{ transform: "scale(1.01)" }}
      sx={{ transition: "ease 600ms" }}
      h={500}
    >
      <Image
        src={img}
        h="100%"
        w="full"
        borderRadius="lg"
        boxShadow="dark-lg"
        sx={{ filter: "brightness(60%)", transition: 'filter 500ms' }}
        _hover={{ filter: "brightness(100%)" }}
      />
      <Text
        fontSize="5xl"
        position="absolute"
        left="50%"
        top="50%"
        color="white"
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        {title}
      </Text>
    </Box>
  );
}
