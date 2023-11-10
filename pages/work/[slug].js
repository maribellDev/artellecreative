import { createClient } from "contentful";
import { Footer } from "/Components/Footer";
import { Navbar } from "/Components/Navbar";
import style from "/styles/workexample.module.scss";
import Action from "/Components/Action";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "/Components/Layout";
import Link from "next/link";
import Head from 'next/head';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "ourWork",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};


export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "ourWork",
    "fields.slug": params.slug,
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ourWork: items[0],
    },
  };
};


export default function ourWorkDetails({ourWork}) {
  const { mainImage, title, bodyText, img2, img3, solutionText, metaDescription, kindOfCase, addImage, review } = ourWork?.fields || {};

  if (!ourWork) return <div>Loading...</div>;

  const pageTitle=`Our latest work - company ${title}`;
  const canonicalUrl = `https://artellecreative.com/work/${ourWork.fields.slug}`;
  return (
    <Layout
      title={pageTitle}
      description={metaDescription}
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
         
         <link rel="canonical" href={canonicalUrl} />

      </Head>``
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
        <div className={style.breadcrumbs}>
              <Link href="/work">Work&nbsp;&nbsp;&gt;&nbsp;&nbsp;</Link>
              <span>{title}</span>
              </div>
          <div className={style.blog}>
            <p className={style.textblue}>{kindOfCase}</p>
            <h1>{title}</h1>
          </div>
        
            <div className={style.main_image}>
          <img
                   alt={mainImage?.fields?.description}
                  src={"https:" + mainImage?.fields?.file?.url}
                  width={mainImage?.fields?.file.details.image.width}
               
                ></img>
                </div>

        
          <div className={style.blog}>
            
      
            <p className={style.text}>{documentToReactComponents(bodyText)}</p>
       
          </div>
          <div className={style.photo}>
          <img
                  alt={img2?.fields?.description}
                  src={"https:" + img2?.fields?.file?.url}
                  width={img2?.fields?.file.details.image.width}
                 
                ></img>
          </div>
          <div className={style.photo}>
          <img
                  alt={img3?.fields?.description}
                  src={"https:" + img3?.fields?.file?.url}
                  width={img3?.fields?.file.details.image.width}
                 
                ></img>
          </div>
          
      <div className={style.blog}>
         
            <p className={style.text}>{documentToReactComponents(solutionText)}</p>
       
          </div>
          <div className={style.photo_many}>
                {addImage.map((image, index ) => (
        <img key={index}  alt={image?.fields?.description || `Image ${index + 1}`} src={"https:" +  image?.fields?.file?.url} 
        width={image?.fields?.file.details.image.width}
        />
      ))}
                 



                 
                
          </div>
          <div className={style.blog}>
         
            <p className={style.text}>{documentToReactComponents(review)}</p>
       
          </div>
         
    
        
          <Action></Action>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}

     
