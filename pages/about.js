import Head from "next/head";
import Image from "next/image";

import Image2 from "../public/img/illustr.svg";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/about.module.scss";
import Layout from "../Components/Layout";
import { Aboutus } from "../Components/Aboutus";
import Action from "../Components/Action";

export default function About() {
  return (
    <Layout
      title="Our Team and Core Values - Artelle Creative"
      description="Get to know the team behind Artelle Creative. Driven by a shared commitment to creativity and functionality, we shape our unique approach to solving your creative needs."
  
    >
    <Head> <link rel="canonical" href="https://artellecreative.com/about"></link></Head>
      <Navbar />

      <div className={style.aboutmain}>
        <div className={style.container1}>
          <h1 style={{padding:"0 16px", textAlign:"center"}}>About Artelle Creative</h1>
          <div className={style.who}>
            <h2>
              We are a lean creative studio, working hard, growing and evolving right alongside the companies we work with.
            </h2>
          </div>
        </div>
      </div>
      <div className={style.nameabout}>
        <h2>Why work with Artelle Creative</h2>

        <div className={style.principles}>
          <div className={style.principImage}>
            <Image src={Image2} alt="circle" />
          </div>
          <div className={style.principtext}>
            <div className={style.blocktext}>
              <h3>We Get Ecom</h3>
              <p>
                We’ve worked with DTC ecommerce brands across different industries and know the secret sauce for great design that drives conversions.
              </p>
            </div>
            <div className={style.blocktext}>
              <h3>Lean By Design</h3>
              <p>
                We're a two-person team — design and development working together from day one. We see the work through beginning to end.
              </p>
            </div>
            <div className={style.blocktext}>
              <h3>No Radio Silence</h3>
              <p>
                Keeping you in the loop from start to finish — clear updates & quick same-day replies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Aboutus />
     <Action/>
     <section></section>
      <Footer />
    </Layout>
  );
}
