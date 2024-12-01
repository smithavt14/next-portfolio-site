import '../styles/globals.css';
import Layout from '@components/layout';
import { BackgroundProvider } from '@hooks/useBackground';
import GoogleAnalytics from '@components/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  return (
    <BackgroundProvider>
      <Layout>
        <Component {...pageProps} />
        <GoogleAnalytics />
      </Layout>
    </BackgroundProvider>
  );
}

export default MyApp;