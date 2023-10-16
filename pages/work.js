import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Maximus } from "../Components/Maximus";
import style from "/styles/work.module.scss";
import { Shudaproperties } from "../Components/Shudaproperties";
import { Nomad } from "../Components/Nomad";
import { Blog } from "../Components/Blog";
import Layout from "../Components/Layout";
import WorkCard from "../Components/WorkCard";
import { createClient } from "contentful";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries({ content_type: "ourWork" });
  console.log("res", res);
  return {
    props: {
      works: res.items,
    },
  };
};


export default function Work({ works }) {
  return (
    <Layout
      title="Case Studies - Artelle Creative"
      keywords="case Studies, web development, web design, web development in florida, 
      web design in Florida, websites, 
      branding, graphic design, logo design, websites for small business, Artelle Creative studio Florida, 
      good websites, 
      affordable websites, artelle creative, artelle websites, artelle designs, professional websites"
      description="Featured website and branding projects."
    >
      <Head></Head>
      <Navbar />

      <div className={style.mainname}>
        <h2 className={style.hHeader}>Latest projects we worked on</h2>
        <p style={{ fontSize: "16px" }}>See our featured case studies.</p>
        {works.map((ourWork) => (
                <WorkCard ourWork={ourWork} key={ourWork.sys.id} />
              ))}
      </div>
  
      <Shudaproperties></Shudaproperties>
      <Maximus></Maximus>
      <Nomad></Nomad>
      <Blog></Blog>
      <Footer />
    </Layout>
  );
}
