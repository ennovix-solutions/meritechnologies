import React, { useEffect, useState } from "react";
import Head from "next/head";

import "react-toastify/dist/ReactToastify.css";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import { fetchContent } from "../lib/contentful";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
// register Swiper custom elements
register();

import dynamic from "next/dynamic";
import CookieConsent from "../components/sections/CookieConsent";

const ToastContainer = dynamic(
  () => import("react-toastify").then((module) => module.ToastContainer),
  {
    ssr: false,
  }
);

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
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        {/* <title>Meri Techs - Your Partner in Digital Success</title> */}
        <title>Top Technology Company in Ethiopia | Meri Technologies</title>
        {/* seo begin */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Leading tech company in Ethiopia, specializing in software, websites, branding, video production, graphics, and marketing. Explore our portfolio for a transformative online presence."
          // content="Meri Technologies - Your Partner in Digital Success"
        />
        <meta
          name="keywords"
          content="Technology company in Ethiopia, digital marketing in Ethiopia, web development in Ethiopia, graphic design in Ethiopia, advertising company in Ethiopia, branding in Ethiopia"
        />
        <meta name="author" content="Meri Technologies" />
        <link rel="canonical" href="https://meritechnologies.com/" />

        <meta
          name="google-site-verification"
          content="gv-nachge46tqa6w6.dv.googlehosted.com"
        />

        {/*  */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Top Technology Company in Ethiopia | Meri Technologies"
        />
        <meta
          property="og:description"
          content="Leading tech company in Ethiopia, specializing in software, websites, branding, video production, graphics, and marketing. Explore our portfolio for a transformative online presence."
        />
        <meta property="og:url" content="https://meritechnologies.com/" />
        <meta property="og:site_name" content="Meri Technologies" />
        <meta
          property="article:modified_time"
          content={`${new Date().toISOString()}`}
          // "2023-09-22T16:28:35+00:00"
        />
        <meta
          property="og:image"
          content="https://meritechnologies.com/img/logo.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1365" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        {/* Geo-Targeting Meta Tag (for local SEO) */}
        <meta name="geo.region" content="ET-AA" />
        <meta name="geo.placename" content="Addis Ababa" />
        <meta name="geo.position" content="9.1450;38.7250" />
        <meta name="ICBM" content="9.1450, 38.7250" />
        {/* seo end */}
      </Head>
      {!loading ? (
        <>
          <ToastContainer />
          <CookieConsent />
          <Component {...pageProps} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
