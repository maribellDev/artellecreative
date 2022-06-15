import "../styles/globals.scss";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2961492, 6);
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
  </Script>;

  return <Component {...pageProps} />;
}

export default MyApp;
