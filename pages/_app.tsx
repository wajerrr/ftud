import { AppProps } from 'next/app';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import { BLOG_NAME } from '../lib/constants';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  );
}
