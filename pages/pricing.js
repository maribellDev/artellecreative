import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/pricing.module.scss";
import Layout from "../Components/Layout";
import { Servicewebsite } from "../Components/Servicewebsite";
import business from "../public/img/pricing/3-new-business.jpg";
import { Servicedevelopment } from "../Components/Servicedevelopment";
import { Servicemarketing } from "../Components/Servicemarketing";
import { Servicephoto } from "../Components/Servicesphoto";
import Action from "../Components/Action";
import retainer from "../public/img/pricing/6-design_retainer.jpg";

export default function Pricing() {
  return (
    <Layout
      title="Pricing - Artelle Creative"
      keywords="Web development, web design, web development in florida, 
       websites for small business, professional websitesfolio Artellecreative website"
      description="Overview of our creative services and pricing."
    >
      <Head></Head>
      <Navbar />

      <div className={style.services}>
        <h1>Services &amp; Pricing</h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p> */}
      </div>
      <div className={style.container}>
        <Servicewebsite />
        <div style={{ padding: "0 10px 0 10px" }}>
          <Link href={"/services/new-business-packages/"}>
            <a>
              <div className={style.im}>
                <Image
                  src={business}
                  className={style.business}
                  alt="business packages"
                />
              </div>
              <h3 style={{ textAlign: "center" }}>New Business Packages</h3>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  letterSpacing: "2.0999999046px",
                  textTransform: "uppercase",
                }}
                className={style.price}
              >
                Starting at $3,800
              </p>
            </a>
          </Link>
        </div>

        <Servicedevelopment />

        <div className={style.block}>
          <h2>Design Retainer</h2>
          <p className={style.text}>
            On-going design support at a flat monthly rate. Includes social
            media posts design, email design, website assets design, campaign
            design, and more.
          </p>
          <Link href={"/services/design-retainer/"}>
            <a>
              <div style={{ marginTop: "68px", padding: "0 10px 0 10px" }}>
                <div className={style.im}>
                  <Image className={style.im} src={retainer} alt="" />
                </div>
              </div>
              <h3 style={{ textAlign: "center" }}>Design Retainer</h3>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  letterSpacing: "2.0999999046px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Starting at $720/month
              </p>
            </a>
          </Link>
        </div>
        <Servicemarketing />
        <Servicephoto />
        <div style={{ marginBottom: "62px" }}>
          <Action />
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  );
}
