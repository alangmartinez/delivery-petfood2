import { HStack, Icon } from '@chakra-ui/react';
import { HiMenuAlt3 } from 'react-icons/hi'

export default function MobileNavBar() {
  return (
    <HStack justify='end' paddingY={4}>
        <Icon cursor='pointer' as={HiMenuAlt3} w={6} h={6} color='whiteAlpha.900'></Icon> 
    </HStack>
  )
}
