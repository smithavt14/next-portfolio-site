import '../styles/globals.css'
import Layout from '@components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {(layoutProps) => <Component {...pageProps} {...layoutProps} />}
    </Layout>
  )
}

export default MyApp;