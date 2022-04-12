import { ChakraProvider, Container, extendTheme, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { Footer, Header } from '../components';
import '../styles/globals.css';

const config = { initialColorMode: 'dark' };
const theme = extendTheme({ config });

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>DeadHappy | Wheel of Doom</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Container maxW={'6xl'} py="8" height="100%">
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </Container>
  </ChakraProvider>
);

export default App;
