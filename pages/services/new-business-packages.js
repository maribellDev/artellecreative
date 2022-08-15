import Head from "next/head";
import { Firstscreen } from "../../Components/business/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/business/Answers";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/business/Toolsweb";
import Pricepackage from "../../Components/business/Pricepackage";
import Reviews from "../../Components/business/Reviews";
import { Howitworks } from "../../Components/business/Howitworks";
import { Gallerypackage } from "../../Components/business/Gallerypackage";
import * as React from "react";

export default function Websitepackages() {
  return (
    <Layout
      title="New Business Website &amp; Branding Packages - Artelle Creative"
      keywords="web development, web design, web development in florida, 
    web design in Florida, websites, 
    branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="The complete package to get launch your business. Website design, branding, and marketing materials all in one."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
