import Head from "next/head";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import style from "/styles/work.module.scss";

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
      title="Case Studies and Latest Work - Artelle Creative"
      description="Explore distinctive websites and branding projects crafted by Artelle Creative web development studio. Immerse yourself in our portfolio, where each project is a blend of technical expertise and creative innovation. Our web solutions reflect your uniqueness, and captivate your target audience."
    >
      <Head> <link rel="canonical" href="https://artellecreative.com/work/"></link></Head>
      <Navbar />

      <div className={style.mainname}>
       <p style={{ marginBottom: "-20px",letterSpacing: "1.4px", fontWeight: "700", textAlign: "left", fontSize: "14px" }}>OUR WORK</p>
        <h1 id="headerWorkpage" className={style.hHeader}>Website &#38; Branding</h1>
        
        {works.map((ourWork) => (
                <WorkCard ourWork={ourWork} key={ourWork.sys.id} />
              ))}
      </div>
  
    
      <Footer />
    </Layout>
  );
}
