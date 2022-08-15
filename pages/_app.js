import "../styles/globals.scss";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import TagManager from "react-gtm-module/dist/TagManager";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2961492, 6);
  }, []);

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-S7QWMT71TD" });
  }, []);

  <Script>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-S7QWMT71TD`}
    />
    <Script strategy="lazyOnload">
      {`window.dataLayer = window.dataLayer || [];
  function gtag() {
  dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-S7QWMT71TD");`}
    </Script>
    <Script
      type="text/javascript"
      src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=YtnfYs"
    ></Script>
  </Script>;

  return <Component {...pageProps} />;
}

export default MyApp;
