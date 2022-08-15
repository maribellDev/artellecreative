import Head from "next/head";
import { Firstscreen } from "../../Components/design-retainer/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/design-retainer/Answers";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/design-retainer/Toolsweb";
// import Reviews from "../../Components/design-retainer/Reviews";
import { Howitworks } from "../../Components/design-retainer/Howitworks";
import { Gallerypackage } from "../../Components/design-retainer/Gallerypackage";
import * as React from "react";

export default function Websitepackages() {
  return (
    <Layout
      title="Ongoing Design Support - Artelle Creative"
      keywords="ongoing Design Support, web development, web design, web development in florida, web design in Florida, websites, 
    branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Design retainer for ongoing marketing needs."
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
