import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import Layout from "../Components/Layout";
import { Serviceblock } from "../Components/Serviceblock";

export default function Pricing() {
  return (
    <Layout
      title="Artelle Creative"
      keywords="Web development, web design, web development in florida, 
       websites for small business, professional websitesfolio Artellecreative website"
      description=""
    >
      <Head></Head>
      <Navbar />

      <div className={style.services}>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
      </div>
      <div className={style.container}>
        <Serviceblock />
      </div>

      <Footer></Footer>
    </Layout>
  );
}
