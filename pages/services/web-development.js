import Head from "next/head";
import { Firstscreen } from "../../Components/webdevelopment/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/webdevelopment/Answers";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/webdevelopment/Toolsweb";
import Reviews from "../../Components/webdevelopment/Reviews";
import { Howitworks } from "../../Components/webdevelopment/Howitworks";
import { Gallerypackage } from "../../Components/webdevelopment/Gallerypackage";
import * as React from "react";

export default function Webdevelopment() {
  return (
    <Layout
      title="Web Development - Artelle Creative"
      
      description="Website development from existing design files."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href="https://artellecreative.com/services/web-development/"></link>
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
