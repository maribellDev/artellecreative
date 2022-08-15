import Head from "next/head";
import { Firstscreen } from "../../Components/digital/Firstscreen";
import { Navbar } from "../../Components/Navbar";
import { Answers } from "../../Components/digital/Answers";
import Action from "../../Components/Action";
import { Footer } from "../../Components/Footer";
import Layout from "../../Components/Layout";
import Toolsweb from "../../Components/digital/Toolsweb";
// import Reviews from "../../Components/digital/Reviews";
import { Howitworks } from "../../Components/digital/Howitworks";
import { Gallerypackage } from "../../Components/digital/Gallerypackage";
import * as React from "react";

export default function Websitepackages() {
  return (
    <Layout
      title="Digital and Print Design - Artelle Creative"
      keywords="digital and Print Design, web development, web design, web development in florida, 
    web design in Florida, websites, branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Digital and printed marketing materials for social media, direct mail, email, and web."
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
