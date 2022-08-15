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
      title="About - Artelle Creative"
      keywords="web development, web design, web development in florida, web design in Florida, websites, branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Artelle Creative is a design &amp; development studio building websites, designing logo &amp; brand identities, and marketing materials."
    >
      <Navbar />

      <div className={style.aboutmain}>
        <div className={style.container1}>
          <div className={style.who}>
            <h2>
              We are creative studio, working hard, growing and evolving right
              alongside the companies we work with.
            </h2>
          </div>
        </div>
      </div>
      <div className={style.nameabout}>
        <h2>Why work with us</h2>

        <div className={style.principles}>
          <div className={style.principImage}>
            <Image src={Image2} alt="about us" />
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
