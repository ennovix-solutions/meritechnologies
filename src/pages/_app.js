import React from "react";
import Head from "next/head";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>Meri Technologies | our work aligns client need </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel={"icon"} href="/img/logo3.png" type="image/png" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
