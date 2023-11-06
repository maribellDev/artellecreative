import Head from "next/head";
import { Firstscreen } from "../../Components/product-and-photo/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/product-and-photo/Answer";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/product-and-photo/Toolsweb";
// import Reviews from "../../Components/product-and-photo/Reviews";
import { Howitworks } from "../../Components/product-and-photo/Howitworks";
import { Gallerypackage } from "../../Components/product-and-photo/Gallerypackage";
import * as React from "react";

export default function Productphoto() {
  return (
    <Layout
      title="Product Photos &amp; Videos - Artelle Creative"
     
      description="Small item product photography for ecommerce."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href="https://artellecreative.com/services/product-photos-&-videos/"></link>
      </Head>

      <Navbar />
      <Firstscreen />
      <section>
        <Toolsweb></Toolsweb>
      </section>
      <Howitworks />
      {/* <Reviews /> */}
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
