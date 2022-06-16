import Head from "next/head";
import { Mainscreen } from "../Components/Mainscreen";
import { Navbar } from "../Components/Navbar";
import style from "../styles/home.module.scss";
import Image from "next/image";
import Icon1 from "../public/icons/icons-home1.svg";
import Icon2 from "../public/icons/icons-home2.svg";
import Icon3 from "../public/icons/icons-home3.svg";
import { Answers } from "../Components/Answers";
import Action from "../Components/Action";
import { Footer } from "../Components/Footer";
import { Blog } from "../Components/Blog";
import Slider from "../Components/Slider";
import Layout from "../Components/Layout";
import Tools from "../Components/Tools";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      title="Artelle Creative - Crafting websites, lasting branding identities, and memorable content"
      keywords="web development, web design, web development in florida, 
    web design in Florida, websites, 
    branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
    good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="We make purposeful websites that look and work great.We design and develop websites, create unique logos, 
      brand identities and marketing materials."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <Mainscreen />
      <section className={style.sectionService}>
        <h2 style={{ paddingTop: "80px" }}>A full-service web design studio</h2>
        <div className={style.allservices}>
          <div className={style.service}>
            <Image src={Icon1} alt="design" />
            <h3>
              Website Design <br />+ Development
            </h3>
            <p className={style.small}>
              We design and build on-of-a-kind websites from start to finish
            </p>
          </div>
          <div className={style.service}>
            <Image src={Icon2} alt="design" />
            <h3 className={style.header3}>
              Content
              <br /> Creation
            </h3>
            <p className={style.small}>
              On-brand, written, and visual content for your website.
            </p>
          </div>
          <div className={style.service}>
            <Image src={Icon3} alt="design" />
            <h3>
              Brand <br />
              Identity
            </h3>
            <p className={style.small}>We craft visual identities that last.</p>
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
