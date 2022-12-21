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
  </Script>;

  //Pinterest Tag

  <Script>
    {`!function(e){if(!window.pintrk){window.pintrk = function () {
  window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
    n=window.pintrk;n.queue=[],n.version="3.0";var
    t=document.createElement("script");t.async=!0,t.src=e;var
    r=document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
  pintrk('load', '2612718672471', {em: '<user_email_address>'});
  pintrk('page');`}
  </Script>;

  // <noscript>
  // <img height="1" width="1" style="display:none;" alt=""
  //   src="https://ct.pinterest.com/v3/?event=init&tid=2612718672471&pd[em]=<hashed_email_address>&noscript=1" />
  // </noscript>
  // end Pinterest Tag

  return <Component {...pageProps} />;
}

export default MyApp;
