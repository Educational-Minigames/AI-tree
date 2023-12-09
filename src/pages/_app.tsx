import 'styles/global.css';
import 'styles/fonts.css';
import 'styles/impress-common.css';
import 'styles/presentation.css';

import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { Fragment } from 'react';
import ThemeRTL from 'configs/themes/ThemeRTL';

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>درخت هوش مصنوعی</title>
        <meta name="description" content="درخت هوش مصنوعی" />
        <meta name="author" content="موزه علوم کامپیوتر ایران" />
      </Head>
      <ThemeProvider theme={ThemeRTL}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
