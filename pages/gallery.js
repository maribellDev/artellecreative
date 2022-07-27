import Head from "next/head";

import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import Action from "../Components/Action";
import React from "react";
import Layout from "../Components/Layout";
import { Gallery } from "../Components/gallery/gallery";
import styles from "../styles/gallery.module.scss";

export default function Contact() {
  return (
    <Layout
      title="Artelle Creative - our work"
      keywords="web development, web design, web development in florida, 
      web design in Florida, websites, 
      branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, 
      affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="We make purposeful websites for small businesses.
      Contact us today and we will create an effective tool for your business."
    >
      <Head></Head>

      <Navbar />

      <Gallery />
      <section className={styles.section}>
        <Action />
      </section>

      <Footer />
    </Layout>
  );
}
