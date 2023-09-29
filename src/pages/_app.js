import React, { useEffect, useState } from "react";
import Head from "next/head";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import { fetchContent } from "../lib/contentful";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    // You can fetch content here and do something with it
    async function fetchData() {
      const content = await fetchContent();
      console.log(content); // You can do something with the content here
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Meri Techs - Your Partner in Digital Success</title>
        {/* seo begin */}
        <meta charSet="UTF-8" />
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
      </Head>{" "}
      {!loading ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
