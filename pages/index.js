import Head from "next/head";
import { Mainscreen } from "../Components/Mainscreen";
import { Navbar } from "../Components/Navbar";
import style from "../styles/home.module.scss";
import Image from "next/image";
import Icon1 from "../public/icons/icon1.gif";
import Icon2 from "../public/icons/icon2.gif";
import Icon3 from "../public/icons/icon3.gif";
import { Answers } from "../Components/Answers";
import Action from "../Components/Action";
import { Footer } from "../Components/Footer";

import Slider from "../Components/Slider";
import Layout from "../Components/Layout";
import Tools from "../Components/Tools";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      title="Artelle Creative - Crafting websites, lasting branding identities, and memorable content"
      keywords="web development, web design, web development in florida, web design in Florida, websites, 
    branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Artelle Creative is a creative studio based in Port St. Lucie, FL. We craft websites, branding identities, and marketing materials for e-commerce and service-based businesses."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:image" content="../public/art.jpg"></meta>
      </Head>

      <Navbar />

      <Mainscreen />
      <section className={style.sectionService}>
        <h2 style={{ paddingTop: "80px" }}>
          Creative partners for businesses at any stage
        </h2>
        <div className={style.allservices}>
          <div className={style.service}>
            <div
              style={{ width: "80px", marginRight: "auto", marginLeft: "auto" }}
            >
              <Image src={Icon1} alt="design" />
            </div>
            <h3>
              Website Design <br />+ Development
            </h3>
            <p className={style.small}>
              We design and build engaging websites from start to finish.
            </p>
          </div>
          <div className={style.service}>
            <div
              style={{ width: "80px", marginRight: "auto", marginLeft: "auto" }}
            >
              <Image src={Icon2} alt="design" />
            </div>
            <h3 className={style.header3}>
              Brand &amp; Logo <br />
              Design
            </h3>
            <p className={style.small}>
              Memorable branding identity and assets to match.
            </p>
          </div>
          <div className={style.service}>
            <div
              style={{ width: "80px", marginRight: "auto", marginLeft: "auto" }}
            >
              <Image src={Icon3} alt="design" />
            </div>
            <h3>
              Marketing
              <br />
              Design
            </h3>
            <p className={style.small}>
              Marketing materials designed for social media, email, or print.
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
