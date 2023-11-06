import Head from "next/head";
import Image from "next/image";

import Image2 from "../public/img/illustr.svg";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/about.module.scss";
import Layout from "../Components/Layout";
import { Aboutus } from "../Components/Aboutus";
import { Aboutinsta } from "../Components/Aboutinsta";

export default function About() {
  return (
    <Layout
      title="Exploring Artelle Creative: Our Team and Values"
      description="Discover the inspiring team behind Artelle Creative, where our dedicated individuals, driven by a shared commitment to creativity and excellence, shape our unique approach to solving your creative needs."
  
    >
    <Head> <link rel="canonical" href="https://artellecreative.com/about"></link></Head>
      <Navbar />

      <div className={style.aboutmain}>
        <div className={style.container1}>
          <h1 style={{padding:"0 16px", textAlign:"center"}}>About Artelle Creative</h1>
          <div className={style.who}>
            <h2>
              We are creative studio, working hard, growing and evolving right
              alongside the companies we work with.
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
              <h3>Transparent pricing</h3>
              <p>
                We offer clear and predictable pricing for most projects. No
                matter the size or revenue of your business, our pricing stays
                the same.
              </p>
            </div>
            <div className={style.blocktext}>
              <h3>Streamlined process</h3>
              <p>
                Whether you’re looking for an ongoing partnership or
                collaboration on a single project, we work effectively and
                efficiently without unnecessary meetings and back-and-forths.
              </p>
            </div>
            <div className={style.blocktext}>
              <h3>All creative needs covered</h3>
              <p>
                No need to manage multiple freelancers. We got all your creative
                needs covered and are available when you need us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Aboutus />
      <Aboutinsta />
      <Footer />
    </Layout>
  );
}
