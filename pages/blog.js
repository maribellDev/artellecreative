import Head from "next/head";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import style from "/styles/blogpage.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import Post2 from "../public/post/Blog01.jpg";
// import Post3 from "../public/post/Blog02.jpg";
// import Post1 from "../public/post/Blog03.jpg";
import PostCard from "../Components/PostCard";
import Layout from "../Components/Layout";
import { createClient } from "contentful";
export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries({ content_type: "blogPage" });
  console.log("res", res);
  return {
    props: {
      posts: res.items,
    },
  };
};

export default function Blog({ posts }) {
  return (
    <Layout
      title="Latest Insights and Ideas - Artelle Creative"
      description="Find out more about our process and approach. Learn about what makes a good website or branding and see our latest company news and announcements."
    >
      <div>
        <Head></Head>
        
        <Navbar />
        <div className={style.sectionblog}>
          <div className={style.containerblog}>
            <h2>Latest stories, insights and ideas</h2>

            <div className={style.posts}>
              {posts.map((blogPage) => (
                <PostCard blogPage={blogPage} key={blogPage.sys.id} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
