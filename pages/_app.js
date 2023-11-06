import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script src="https://embed.sellpass.io/embed.js" defer /> 
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
