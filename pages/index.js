import Head from "next/head";
import { Mainscreen } from "../Components/Mainscreen";
import { Navbar } from "../Components/Navbar";
import style from "../styles/home.module.scss";
import Action from "../Components/Action";
import { Footer } from "../Components/Footer";
import Slider from "../Components/Slider";
import Layout from "../Components/Layout";
import Tools from "../Components/Tools";
import Link from "next/link";
export default function Home() {
  return (
    <Layout
      title="Artelle Creative - Web Design and Development, Branding, and Marketing Design"
      description="We craft websites, branding identities, and marketing materials for e-commerce and service-based businesses. User-friendly, on-brand, and eye-catching websites are our specialty."
    >
      <Head>
      <link rel="canonical" href="https://artellecreative.com/"></link>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <Mainscreen />
      <section className={style.sectionService}>
        <h2 style={{ paddingTop: "80px" }}>
          The perfect fit for growing brands.
        </h2>
        <div className={style.allservices}>
          <div className={style.service}>
            <div
              style={{ width: "80px", marginRight: "auto", marginLeft: "auto" }}
            >
              <img
              src="/icons/icon1.gif"
              className={style.image}
              width={80}
              height={80} 
              alt="icon1" />
            </div>
            <h3>
              Website Design <br />+ Development
            </h3>
            <p className={style.small}>
              Engaging, great-looking websites that reflect your brand, connect with your audience, and help drive growth.
            </p>
          </div>
          <div className={style.service}>
            <div
              style={{ width: "80px", marginRight: "auto", marginLeft: "auto" }}
            >
              <img
              src="/icons/icon2.gif"
              className={style.image}
              width={80}
              height={80} 
              alt="icon2" />
            </div>
            <h3 className={style.header3}>
              Brand &amp; Logo <br />
              Design
            </h3>
            <p className={style.small}>
              Purposeful logo and brand identity design that builds stronger customer connections and elevates your brand.
            </p>
          </div>
          <div className={style.service}>
            <div
              style={{ width: "80px", marginRight: "auto", marginLeft: "auto" }}
            >
              <img
              src="/icons/icon3.gif"
              className={style.image}
              width={80}
              height={80} 
              alt="icon3" />
            </div>
            <h3>
              Marketing
              <br />
              Design
            </h3>
            <p className={style.small}>
              Designing assets for email, social, print, and web to support and scale your marketing and sales efforts.
            </p>
          </div>
        </div>
        <div className={style.btnServices}>
          <Link href={"/contact"}>
            <a style={{ paddingRight: "0px" }}>
              {" "}
              <button className={style.dark}>Get Started </button>
            </a>
          </Link>
        </div>
      </section>
      <section>
        <Slider />
      </section>
      <section>
        <Tools></Tools>
      </section>
      
      <section>
        <Action></Action>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </Layout>
  );
}
