import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link href="https://db.onlinewebfonts.com/c/f6886c4078ba029be14b7d1053f961b5?family=Anjoman" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/5fc6f4fd75e944a52a342ab2c7f100f1?family=Montserrat" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
