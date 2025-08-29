// import { createClient } from "contentful";

// import Head from "next/head";

// import style from "../../styles/post.module.scss";

// import Layout from "../../Components/Layout";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Navbar } from "../../Components/Navbar";
// import { Blogpost } from "../../Components/Blogpost";
// import { Footer } from "../../Components/Footer";
// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });
// export const getStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type: "blogPage",
//   });

//   const paths = res.items.map((item) => {
//     return {
//       params: { slug: item.fields.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const { items } = await client.getEntries({
//     content_type: "blogPage",
//     "fields.slug": params.slug,
//   });

//   if (!items.length) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       blogPage: items[0],
//     },
//   };
// };

// export default function PostDetails({ blogPage }) {
//   const { mainImage, title, authorImage, authorName, data, post } =
//     blogPage?.fields || {};

//   if (!blogPage) return <div>Loading...</div>;
//   const canonicalUrl = `https://artellecreative.com/posts/${blogPage.fields.slug}`;
//   return (
//     <Layout title="blog" keywords="posts" description="Our blog">
//       <Head>
//         <meta charSet="UTF-8"></meta>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         ></meta>
         
//          <link rel="canonical" href={canonicalUrl} />

//       </Head>
//       <Navbar />
//       <div className={style.postsall}>
//         <div className={style.postscontainer}>
//           <div className={style.headerauthor}>
//             <h1 style={{ textAlign: "left", marginBottom:"45px" }}>{title}</h1>
//              {/* <div className={style.author}>
//               <div className={style.photoImage}>
//                 <img
//                   alt=""
//                   src={"https:" + authorImage?.fields?.file?.url}
//                   width={authorImage?.fields?.file.details.image.width}
//                   height={authorImage?.fields?.file.details.image.height}
//                 ></img>
//               </div>
//               <div className={style.photoname}>
//                 <p>
//                   {authorName}
//                   <span style={{ fontWeight: "600" }}>
//                     <br />
//                   </span>
//                   {data}
//                 </p>
//               </div>
//             </div>  */}
//           </div>
//           <div className={style.photo}>
//             <img
//               alt=""
//               src={"https:" + mainImage?.fields?.file?.url}
//               width={mainImage?.fields?.file?.details?.image}
//               height={mainImage?.fields?.file?.details?.image}
//             ></img>
//           </div>

//           <p className={style.text}>{documentToReactComponents(post)}</p>
//         </div>
//       </div>
//       <div className={style.blog}>
//         <Blogpost />
//       </div>
//       <Footer />
//     </Layout>
//   );
// }
