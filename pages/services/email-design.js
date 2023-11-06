import Head from "next/head";
import { Firstscreen } from "../../Components/email/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/email/Anwers";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/email/Toolsweb";
import Reviews from "../../Components/email/Reviews";
import { Howitworks } from "../../Components/email/Howitworks";
import { Gallerypackage } from "../../Components/email/Gallerypackage";
import * as React from "react";

export default function Email() {
  return (
    <Layout
      title="Email Design - Artelle Creative"
    
      description="On-brand, beautifully designed, conversion-optimized marketing emails and flows."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href="https://artellecreative.com/services/email-design/"></link>
      </Head>

      <Navbar />
      <Firstscreen />
      <section>
        <Toolsweb></Toolsweb>
      </section>
      <Howitworks />
      <Reviews />
      <Gallerypackage />
      <Answers></Answers>
      <section>
        <Action></Action>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </Layout>
  );
}
