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
        <title>Meri Technologies - Your Partner in Digital Success</title>
        {/* seo begin */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Meri Technologies - Your Partner in Digital Success"
        />
        <meta
          name="keywords"
          content="Meri Technologies, digital marketing, web development, graphic design, advertising, branding"
        />
        <meta name="author" content="Meri Technologies" />
        <link rel={"icon"} href="/img/logo3.png" type="image/png" />

        {/* Geo-Targeting Meta Tag (for local SEO) */}
        <meta name="geo.region" content="ET-AA" />
        <meta name="geo.placename" content="Addis Ababa" />
        <meta name="geo.position" content="9.1450;38.7250" />
        <meta name="ICBM" content="9.1450, 38.7250" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
