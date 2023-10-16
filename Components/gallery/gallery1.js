
// import style from "../../styles/gallery.module.scss";
// import Fancybox from "./fancybox.js";

// import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });
// export const getStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type: "gallery",
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
//     content_type: "gallery",
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
//       gallery: items[0],
//     },
//   };
// };



// export default function Gallery1({ gallery }) {
//   const {imgGallery } = gallery.fields;
//   return (
//     <>
//       <div className={style.container}>
//         <h2>Our work</h2>
//         <p className={style.text}>
//           We help companies look their best. Take a look at our work.
//         </p>

//         <Fancybox>
//           <div className={style.gallerypackage}>
//             <div className={style.part1}>
//               <div className={style.col1}>
//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/EmailDesign5_wxnegk.jpg"
//                   >
//                    <div className={style.photo_many}>
//                 {imgGallery.map((image, index ) => (
//         <img key={index} src={"https:" +  image?.fields?.file?.url} alt={title} 
//         width={image?.fields?.file.details.image.width}
//         />
//       ))}
          
//           </div>
       
//                   </a>
//                 </div>

//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/NT-gif_hfuknj.gif"
//                   >
                 
//                   </a>
//                 </div>

//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/BakingKit2_wo4jce.jpg"
//                   >
                   
//                   </a>
//                 </div>

//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/EmailDesign3_yci188.jpg"
//                   >
                   
//                   </a>
//                 </div>

//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/BabyKtan_wdkm8p.jpg"
//                   >
                    
//                   </a>
//                 </div>

//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/MG2_dbfu83.jpg"
//                   >
                    
//                   </a>
//                 </div>
//               </div>
//               <div className={style.col2}>
//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/myphoto1_xrw2ix.jpg"
//                   >
                  
//                   </a>
//                 </div>

//               </div>
//               </div>
//             <div className={style.part2}>
//               <div className={style.col3}>
//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/Thrive_StyleGuide_nbqcfl.jpg"
//                   >
                  
//                   </a>
//                 </div>

              
//               </div>
//               <div className={style.col4}>
//                 <div className={style.item}>
//                   <a
//                     data-fancybox="gallery"
//                     href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/360block_lsnl5y.gif"
//                   >
                    
//                   </a>
//                 </div>
              
//               </div>
//             </div>
//           </div>
//         </Fancybox>
//       </div>
//     </>
//   );
// }
