import Contests from '../components/Contests'
import { ChakraProvider } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider resetCSS={true}>
      <Contests />
    </ChakraProvider>
  )
}

export default Home
