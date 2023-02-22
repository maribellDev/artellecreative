// import { createClient } from "contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Head from "next/head";
// import { Footer } from "../../Components/Footer";
// import { Navbar } from "../../Components/Navbar";
// import style from "../../styles/post.module.scss";
// import { Blogpost } from "../../Components/Blogpost";
// import Layout from "../../Components/Layout";

// // import { GetStaticProps, GetStaticPaths } from "next";
// // import { useRouter } from "next/router";
// // import path from "path";

// // import Skeleton from "../../components/Skeleton";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });

// export async function getStaticPaths() {
//   const res = await client.getEntries({ content_type: "blogPage" });

//   const paths = res.items.map((item) => {
//     return {
//       params: { slug: item.fields.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
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
//     props: { blogPage: items[0] },
//     revalidate: 1,
//   };
// }

// export default function PostDetails({ blogPage }) {
//   //   if (!blogPage) return <Skeleton />;

//   const { mainImage, title, authorImage, authorName, data, post } =
//     blogPage.fields;
//   console.log(blogPage);
//   return (
//     <Layout
//       title="Our approach to website projects? - Artelle Creative"
//       keywords="posts blog Artelle creative web development"
//       description="Our blog"
//     >
//       <Head />
//       <Navbar />
//       <div className={style.postsall}>
//         <div className={style.postscontainer}>
//           <div className={style.headerauthor}>
//             <h1 style={{ textAlign: "left" }}>{title}</h1>

//             <div>
//               <div className="banner">
//                 <img
//                   src={"https:" + mainImage.fields.file.url}
//                   width={mainImage.fields.file.details.image.width}
//                   height={mainImage.fields.file.details.image.height}
//                 ></img>

//                 <div className={style.photo}>
//                   <div className={style.photoImage}>
//                     <img
//                       src={"https:" + authorImage.fields.file.url}
//                       width={authorImage.fields.file.details.image.width}
//                       height={authorImage.fields.file.details.image.height}
//                     ></img>
//                     <div className={style.photoname}>
//                       <p>
//                         {authorName}
//                         <span style={{ fontWeight: "600" }}>
//                           <br />
//                         </span>
//                         {data}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   src={"https:" + mainImage.fields.file.url}
//                   width={mainImage.fields.file.details.image.width}
//                   height={mainImage.fields.file.details.image.height}
//                 ></img>
//                 <p className={style.text}>{post}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={style.blog}>
//           <Blogpost />
//         </div>
//       </div>
//       <Footer />
//     </Layout>
//   );
// }
