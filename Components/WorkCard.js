import Link from "next/link";
import React from "react";
import style from "../styles/work.module.scss";
import styles from "../styles/home.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function WorkCard({ ourWork, isImageLeft }) {
  const { title, slug, workDescription, thumbnail } = ourWork.fields;
  
  return (
    <>
      <div className={style.work}>
        <div className={`${style.textwork} ${isImageLeft ? style.orderRight : style.orderLeft}`}>
          <Link href={`/work/${slug}`}>
            <a>
              <h5>{title}</h5>
              <p className={style.work_description}>{documentToReactComponents(workDescription)}</p>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={`${style.Imagework} ${isImageLeft ? style.orderLeft : style.orderRight}`}>
          <Link href={`/work/${slug}`}>
            <a>
              <img
                alt=""
                src={"https:" + thumbnail?.fields?.file?.url}
                width={thumbnail?.fields?.file.details.image.width}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}