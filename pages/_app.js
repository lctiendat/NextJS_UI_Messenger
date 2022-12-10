import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Messenger</title>
      <link rel="shortcut icon" href="/images/logo-messenger.png" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
