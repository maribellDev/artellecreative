import Head from "next/head";
// import Image from "next/image";
// import Insta from "../public/icons/instagram.svg";
// import Facebook from "../public/icons/facebook.svg";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/contact.module.scss";
import React from "react";

import Layout from "../Components/Layout";

export default function Contact() {
  return (
    <Layout
      style={{ backgroundColor: "#F7F7FA" }}
      title="Contact - Artelle Creative"
      keywords="web development, web design, web development in florida, web design in Florida, websites, branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Reach out to us and we'll get right back to you."
    >
      <Head>
      <link rel="canonical" href="https://artellecreative.com/contact/"></link>
      </Head>
      <div style={{ backgroundColor: "rgba(247, 247, 250, 1)" }}>
        <Navbar />
      </div>
      <div className={style.contact}>
        <div className={style.container}>
          <div className={style.getit}>
            <h1>Have a project in mind?</h1>
            <p>Fill out the form or send us an email at</p>
            <p>
              <a
                href="mailto:
                hello@artellecreative.com"
              >
                hello@artellecreative.com.
              </a>
            </p>

            {/* <p className={style.follow} style={{ fontSize: "24px" }}>
              Follow along
            </p>
            <div className={style.social}>
              <a
                href={"https://www.instagram.com/artellecreative/"}
                target="_blank"
              >
                <span className={style.insta}>
                  <Image src={Insta} alt="Logo" />
                </span>
              </a>
              <a
                href={"https://www.facebook.com/ArtelleCreative"}
                target="_blank"
              >
                <span className={style.facebook}>
                  <Image src={Facebook} alt="Logo" />
                </span>
              </a>
            </div> */}
          </div>
          <div className={style.calendar}>
            <iframe
              src="https://app.hellobonsai.com/f/a83cc4348918c80?embed=true&hide_header=true"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                minHeight: "600px",
                scroll: "none",
              }}
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
