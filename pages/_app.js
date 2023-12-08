import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative">
      <script
        async
        src="https://myumami-tau.vercel.app/script.js"
        data-website-id="8b2826cc-e4e8-4893-9b99-90fedcb85f37"
      ></script>
      <Head>
        <title>Dash & Cash Shop</title>
        {/* page favion png */}
        <link
          rel="icon"
          href="https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/912c2582-72cf-4c43-b02e-d042be332900/1600X1200"
        />
        <meta name="theme-color" content="#17ff1a" />
        <meta name="title" content={`Dash & Cash Shop`}></meta>
        <meta property="og:title" content={`Dash & Cash Shop`}></meta>

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

      {/* telegram btn */}
      <Link href={"https://t.me/shopdashcash"} target="_blank">
        <div className="fixed bottom-10 right-5 z-[99999]">
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="14" fill="url(#a)" />
            <path
              d="M22.987 10.209c.124-.806-.642-1.441-1.358-1.127L7.365 15.345c-.514.225-.476 1.003.056 1.173l2.942.937c.562.179 1.17.086 1.66-.253l6.632-4.582c.2-.138.418.147.247.323l-4.774 4.922c-.463.477-.371 1.286.186 1.636l5.345 3.351c.6.376 1.37-.001 1.483-.726l1.845-11.917Z"
              fill="#fff"
            />
            <defs>
              <linearGradient
                id="a"
                x1="16"
                y1="2"
                x2="16"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#37BBFE" />
                <stop offset="1" stopColor="#007DBB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Link>
      <Component {...pageProps} />
    </div>
  );
}
