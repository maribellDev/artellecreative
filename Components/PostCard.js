// import Link from "next/link";
// import style from "/styles/blogpage.module.scss";
// import Image from "next/image";

// export default function PostCard({ blogPage }) {
//   const { title, slug, onClick, thumbnail } = blogPage.fields;

//   return (
//     <div>
//       <div className={style.post}>
//         <div className={style.blogImage}>
          
//           <img
//             src={"https:" + thumbnail?.fields?.file?.url}
     
//             alt="strategy"
//             id={style.imagesize}
//           ></img>
//         </div>

//         <p className={style.postname}>{title}</p>

//         <Link href={`/posts/${slug}`}>
//           <a>
//             <span className={style.more} onClick={onClick}>
//               Read more
//             </span>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }

