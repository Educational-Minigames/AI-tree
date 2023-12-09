import 'styles/global.css';
import 'styles/fonts.css';
import 'styles/impress-common.css';
import 'styles/presentation.css';

import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { Fragment } from 'react';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Anjoman', 'IRANYekan', 'Lalezar'",
      fontWeight: 400,
    },
    button: {
      fontFamily: "'Anjoman', 'IRANYekan', 'Lalezar'",
      fontWeight: 400,
    }
  },
  palette: {
    primary: {
      light: '#3498DB',
      main: '#3C8CE7',
      dark: '#00376F',
      contrastText: '#000',
    },
    secondary: {
      light: '#FFE08B',
      main: '#FFD358',
      dark: '#ffbb00',
      contrastText: '#fff',
    },
  },
});

function App({ Component, pageProps }: AppProps) {

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>درخت هوش مصنوعی</title>
        <meta name="description" content="درخت هوش مصنوعی" />
        <meta name="author" content="موزه علوم کامپیوتر ایران" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
