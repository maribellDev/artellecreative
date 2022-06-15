import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/mod3ewt.css" />
          {/*   <Script
            async
            type="text/javascript"
            src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=YtnfYs`}
          ></Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
