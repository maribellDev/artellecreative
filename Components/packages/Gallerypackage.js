import Image from "next/image";
import style from "../../styles/gallerypackage.module.scss";
import styles from "../../styles/home.module.scss";
import img1 from "../../public/gallery/MG1.jpg";
import img4 from "../../public/gallery/360block.gif";
import img3 from "../../public/gallery/lights_july4.jpg";
import img2 from "../../public/gallery/myphoto1.jpg";
import img5 from "../../public/gallery/EmailDesign5.jpg";
import img8 from "../../public/gallery/NT-gif.gif";
import img7 from "../../public/gallery/TheArtelleWebsite-blog.jpg";
import img6 from "../../public/gallery/Thrive_StyleGuide.jpg";

import Link from "next/link";

export function Gallerypackage() {
  return (
    <>
      <div className={style.container}>
        <div className={style.gallerypackage}>
          <div className={style.col1}>
            <div className={style.item}>
              <Image classname={style.img} src={img5} alt="" />
            </div>
            <div className={style.item}>
              <Image classname={style.img} src={img8} alt="" />
            </div>
          </div>
          <div className={style.col2}>
            <div className={style.item}>
              <Image classname={style.img} src={img2} alt="" />
            </div>
            <div className={style.item}>
              <Image classname={style.img} src={img1} alt="" />
            </div>
          </div>
          <div className={style.col3}>
            <div className={style.item}>
              <Image classname={style.img} src={img6} alt="" />
            </div>
            <div className={style.item}>
              <Image classname={style.img} src={img3} alt="" />
            </div>
          </div>
          <div className={style.col4}>
            <div className={style.item}>
              <Image src={img4} alt="" />
            </div>
            <div className={style.item}>
              <Image src={img7} alt="" />
            </div>
          </div>
        </div>
        <div className={style.btnServices}>
          <Link href="/">
            <a style={{ paddingRight: "0px", color: "white" }}>
              <button className={styles.dark}>Get Started </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
