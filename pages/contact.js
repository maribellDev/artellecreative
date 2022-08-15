import Head from "next/head";
import Image from "next/image";
import Insta from "../public/icons/instagram.svg";
import Facebook from "../public/icons/facebook.svg";
import Photo from "../public/post/ana.png";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "../styles/contact.module.scss";
import React from "react";
import { InlineWidget } from "react-calendly";
import Layout from "../Components/Layout";

export default function Contact() {
  return (
    <Layout
      style={{ backgroundColor: "#F7F7FA" }}
      title="We’d love to chat. Get in touch and let's build things together - Artelle Creative"
      keywords="web development, web design, web development in florida, 
      web design in Florida, websites, 
      branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, 
      affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="We make purposeful websites for small businesses.
      Contact us today and we will create an effective tool for your business."
    >
      <Head></Head>
      <div style={{ backgroundColor: "rgba(247, 247, 250, 1)" }}>
        <Navbar />
      </div>
      <div className={style.contact}>
        <div className={style.container}>
          <div className={style.getit}>
            <h1>Get in touch</h1>
            <p>
              We’d love to chat. Let’s start by scheduling a quick call to talk
              about your project.
            </p>

            <p>
              Alternatively, you can always email us at&nbsp;
              <a
                href="mailto:
                hello@artellecreative.com"
              >
                hello@artellecreative.com.
              </a>
            </p>

            <div className={style.photo}>
              <div className={style.photoImage}>
                <Image src={Photo} alt="" />
              </div>
              <div className={style.photoname}>
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Ana Shuda <br />
                  </span>
                  Visual designer and strategist
                </p>
              </div>
            </div>
            <p className={style.follow} style={{ fontSize: "24px" }}>
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
            </div>
          </div>
          <div className={style.calendar}>
            <div class="klaviyo-form-TxGBQV"></div>
            {/* <InlineWidget url="https://calendly.com/artellecreative/discoverycall?hide_event_type_details=1&hide_gdpr_banner=1&month=2022-03" /> */}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
