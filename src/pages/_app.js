import App, { Container } from "next/app";
import { DefaultSeo } from "next-seo";

import SEO from "@/next-seo.config";

import "react-toastify/dist/ReactToastify.css";

import "../styles/scss/style.scss";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import CookieConsent from "../components/sections/CookieConsent";
import Loader from "../components/Loader";

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
      {!loading ? (
        <>
          <DefaultSeo {...SEO} />
          <ToastContainer />
          <CookieConsent />
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <DefaultSeo {...SEO} />
          <Loader />
        </>
      )}
    </>
  );
}
