import '../styles/globals.css'
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {(layoutProps) => <Component {...pageProps} {...layoutProps} />}
    </Layout>
  )
}

export default MyApp;