import { AppProps } from 'next/app';
import './styles.css';
import { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import theme from '../config/theme';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <BootstrapProvider theme={theme}>
      <Layout {...Component} {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </BootstrapProvider>
  );
}

export default App;
