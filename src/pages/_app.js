import App, { Container } from "next/app";
import { DefaultSeo, OrganizationJsonLd } from "next-seo";

import SEO, { organizationJSONLD } from "@/next-seo.config";

import "react-toastify/dist/ReactToastify.css";

import "../styles/scss/style.scss";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import CookieConsent from "../components/sections/CookieConsent";
import Loader from "../components/Loader";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
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

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        <title>Top Technology Company in Ethiopia | Meri Technologies</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Meri Technologies is a cutting-edge technology company offering Website Development, Software Development, and innovative IT solutions. We specialize in custom web and software development for businesses worldwide."
        />
        <link rel="canonical" href="https://meritechnologies.com" />
        <meta
          name="keywords"
          content="Technology solutions, Website design, Software development, IT services, Custom software development, Web development, Innovative technology, Digital solutions, Meri Technologies"
        />
        <meta name="publisher" content="https://meritechnologies.com" />
        <meta
          name="copyright"
          content="Copyright (c) Meri Technologies - Leading in Website and Software Solutions"
        />
        <meta name="author" content="Meri Technologies" />
        <meta name="contact" content="info@meritechnologies.com" />
        <meta name="revisit-after" content="7 Days" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="subjects"
          content="Cutting-Edge Technology, Website Development, Software Solutions"
        />
        <meta
          name="classification"
          content="Cutting-Edge Technology, Website Development, Software Solutions"
        />
        <meta
          itemprop="name"
          content="Meri Technologies - Cutting-Edge Technology Solutions"
        />
        <meta
          itemprop="description"
          content="Meri Technologies is a cutting-edge technology company offering Website Development, Software Development, and innovative IT solutions. We specialize in custom web and software development for businesses worldwide."
        />
        <meta
          itemprop="image"
          content="https://meritechnologies.com/logo2.png"
        />
        <meta
          property="og:title"
          content="Meri Technologies - Cutting-Edge Technology Solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meritechnologies.com" />
        <meta
          property="og:image"
          content="https://meritechnologies.com/servicebg.webp"
        />
        <meta property="og:site_name" content="Meri Technologies" />
        <meta
          property="og:description"
          content="Meri Technologies is a cutting-edge technology company offering Website Development, Software Development, and innovative IT solutions. We specialize in custom web and software development for businesses worldwide."
        ></meta>
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
      </Head>
      {!loading ? (
        <>
          {/* <DefaultSeo {...SEO} /> */}
          {/* <OrganizationJsonLd {...organizationJSONLD} /> */}
          <ToastContainer />
          <CookieConsent />
          <Component {...pageProps} />
        </>
      ) : (
        <>
          {/* <DefaultSeo {...SEO} /> */}
          <Loader />
        </>
      )}
    </>
  );
}
