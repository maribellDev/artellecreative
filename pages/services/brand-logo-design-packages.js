import Head from "next/head";
import { Firstscreen } from "../../Components/brand/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/brand/Answers";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/brand/Toolsweb";
import Pricepackage from "../../Components/brand/Pricepackage";
import Reviews from "../../Components/brand/Reviews";
import { Howitworks } from "../../Components/brand/Howitworks";
import { Gallerypackage } from "../../Components/brand/Gallerypackage";
import * as React from "react";

export default function Brandlogo() {
  return (
    <Layout
      title="Brand &amp; Logo Design Packages - Artelle Creative"
    
      description="Differentiate your business with brand and logo design."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
       <link rel="canonical" href="https://artellecreative.com/services/brand-logo-design-packages/"></link>
      </Head>
      <Navbar />
      <Firstscreen />
      <section>
        <Toolsweb></Toolsweb>
      </section>
      <Howitworks />
      <Pricepackage />
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
