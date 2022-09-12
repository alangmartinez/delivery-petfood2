import { HStack, Icon, Input, theme, StackDivider } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <>
      <HStack
        divider={<StackDivider bgColor='blackAlpha.500' />}
        marginTop={10}
        bgColor="white"
        paddingX={5}
        paddingY={3}
        maxWidth={900}
        alignSelf='center'
        alignContent='center'
        margin='auto'
        borderRadius='lg'
        fontFamily={theme.fonts.body}
        boxShadow='dark-lg'
        w='100%'
      >
        <Input
          variant="unstyled"
          placeholder="Type to search"
          color="black"
          _placeholder={{ color: "blackAlpha.500", fontSize: 21 }}
          fontSize={21}
          autoFocus
          paddingY={1}
          paddingX={1}
        ></Input>
        <Icon as={BsSearch} cursor="pointer" color='gray.700' marginStart={2} w={5} h={5}></Icon>
      </HStack>
    </>
  );
}
