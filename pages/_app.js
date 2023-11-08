import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dash & Cash Shop</title>
        {/* page favion png */}
        <link
          rel="icon"
          href="https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/912c2582-72cf-4c43-b02e-d042be332900/1600X1200"
        />
        <meta name="theme-color" content="#17ff1a" />
        <meta
          name="title"
          content={`Dash & Cash Shop`}
        ></meta>
        <meta
          property="og:title"
          content={`Dash & Cash Shop`}
        ></meta>

        <meta
          name="description"
          content={`Dash & Cash: Your One-Stop Shop for Affordable Dining, Shopping, and Cashout Excellence!!`}
        ></meta>
        <meta
          property="og:image"
          content="https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/912c2582-72cf-4c43-b02e-d042be332900/1600X1200"
        ></meta>
        <meta
          name="twitter:image"
          content="https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/912c2582-72cf-4c43-b02e-d042be332900/1600X1200"
        ></meta>

        <meta property="og:url" content="/"></meta>
        <meta
          property="og:description"
          content={`Dash & Cash: Your One-Stop Shop for Affordable Dining, Shopping, and Cashout Excellence!!`}
        ></meta>
        {/* <meta property="twitter:card" content="summary_large_image"></meta> */}
        <meta property="twitter:url" content="/"></meta>
        <meta property="og:image:type" content="image/png"></meta>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
