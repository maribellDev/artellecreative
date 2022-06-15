export function Google() {
  return (
    <>
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
        async
        type="text/javascript"
        src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=YtnfYs`}
      ></Script>
    </>
  );
}
