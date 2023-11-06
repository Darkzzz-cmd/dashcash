import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <script src="https://embed.sellpass.io/embed.js" defer />
      <Component {...pageProps} />
    </div>
  );
}
