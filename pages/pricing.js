import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/pricing.module.scss";
import Layout from "../Components/Layout";
import { Servicewebsite } from "../Components/Servicewebsite";
import business from "../public/img/pricing/businessimg.png";

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
        <Servicewebsite />
        <div style={{ padding: "0 10px 0 10px" }}>
          <Image
            src={business}
            className={style.business}
            alt="business package"
          />
          <h3 style={{ textAlign: "center" }}>New Business Package</h3>
          <p style={{ textAlign: "center" }} className={style.price}>
            Starting at $2,800
          </p>
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  );
}
