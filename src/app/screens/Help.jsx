import { Container } from '@chakra-ui/react'
import HelpForm from '../../components/HelpForm'

export default function Help() {
  return (
    <Container paddingX={16} paddingY={14} bgColor='whiteAlpha.900' borderRadius='lg' boxShadow='lg' maxW='container.sm'>
        <HelpForm variant='flushed' />
    </Container>
  )
}
