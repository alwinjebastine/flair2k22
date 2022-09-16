import { ChakraProvider } from '@chakra-ui/react'
import styled from '@emotion/styled'

const H1 = styled.h1`
  font-size: 40px;
  background-color: red;
`

const Home = () => {
  return (
    <ChakraProvider resetCSS={true}>
      <H1>Hello World</H1>
    </ChakraProvider>
  )
}

export default Home
