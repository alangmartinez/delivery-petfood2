import { HStack, Icon } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Social({ size, color }) {
  return (
    <HStack spacing={8} color={color}>
        <Icon cursor='pointer' w={size} h={size} as={FaFacebook}/>
        <Icon cursor='pointer' w={size} h={size} as={FaTwitter}/>
        <Icon cursor='pointer' w={size} h={size} as={FaInstagram}/>
        <Icon cursor='pointer' w={size} h={size} as={FaGithub}/>
    </HStack>
  )
}
