import Head from "next/head";

import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import Action from "../Components/Action";
import React from "react";
import Layout from "../Components/Layout";
import { Gallery } from "../Components/gallery/gallery";
import styles from "../styles/gallery.module.scss";
// import { Gallery1 } from "../Components/gallery/gallery1";

export default function Gallerypage() {
  return (
    <Layout
      title="Marketing Design Inspiration - Artelle Creative"
     
      description="Browse our recent eye-catching designs for marketing, including e-commerce promotional campaigns, advertisement design, email campaigns and product photography. "
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
