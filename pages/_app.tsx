import "@styles/globals.css";
import Layout from "@components/Layout";
import GoogleAnalytics from "@components/GoogleAnalytics";
import { BackgroundProvider } from "@hooks/useBackground";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
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
