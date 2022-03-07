import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme'
import { ColorModeScript } from '@chakra-ui/react'


export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>ConvertAll</title>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}