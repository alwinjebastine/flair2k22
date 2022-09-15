import Events from './Events'
import { ChakraProvider } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider resetCSS={true}>
      <Events />
    </ChakraProvider>
  )
}

export default Home
