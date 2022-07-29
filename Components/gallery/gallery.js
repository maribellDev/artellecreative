import Image from "next/image";
// import Link from "next/link";
import style from "../../styles/gallery.module.scss";
import img1 from "../../public/gallery/MG1.jpg";
import img4 from "../../public/gallery/360block.gif";
import img3 from "../../public/gallery/lights_july4.jpg";
import img2 from "../../public/gallery/myphoto1.jpg";
import img5 from "../../public/gallery/EmailDesign5.jpg";
import img8 from "../../public/gallery/NT-gif.gif";
import img7 from "../../public/gallery/TheArtelleWebsite-blog.jpg";
import img6 from "../../public/gallery/Thrive_StyleGuide.jpg";
import img11 from "../../public/gallery/BabyKtan.jpg";
import img9 from "../../public/gallery/BakingKit2.jpg";
import img10 from "../../public/gallery/EmailDesign3.jpg";
import img12 from "../../public/gallery/MG2.jpg";
import img13 from "../../public/gallery/MG3.jpg";
import img14 from "../../public/gallery/myphoto2.jpg";
import img15 from "../../public/gallery/NomadTechy1.jpg";
import img16 from "../../public/gallery/NT-full.jpg";
import img17 from "../../public/gallery/PhotoGifts&Decor1.jpg";
import img18 from "../../public/gallery/PhotoGifts&Decor2.jpg";
import img19 from "../../public/gallery/PhotoGifts&Decor3.jpg";
import img20 from "../../public/gallery/StockingStuffers.jpg";
import img21 from "../../public/gallery/TheArtelle-blog.jpg";
import img22 from "../../public/gallery/TheArtelleWebsite-blog.jpg";
import img23 from "../../public/gallery/Thrive_StyleGuide.jpg";
import img24 from "../../public/gallery/ThriveWomensConference.jpg";
import img25 from "../../public/gallery/vday_block.gif";
import Fancybox from "./fancybox.js";

export function Gallery() {
  return (
    <>
      <div className={style.container}>
        <h2>Our Work</h2>
        <p className={style.text}>
          We help companies look their best. Have a look at our work.
        </p>
        <Fancybox>
          <div className={style.gallerypackage}>
            <div className={style.part1}>
              <div className={style.col1}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://images.unsplash.com/photo-1647613233044-bb52d86f778d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  >
                    <Image classname={style.img} src={img5} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img8} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img9} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img10} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img11} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img12} alt="" />
                </div>
              </div>
              <div className={style.col2}>
                <div className={style.item}>
                  <Image classname={style.img} src={img2} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img1} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img13} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img14} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img15} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img16} alt="" />
                </div>
              </div>
            </div>
            <div className={style.part2}>
              <div className={style.col3}>
                <div className={style.item}>
                  <Image classname={style.img} src={img6} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img3} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img17} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img18} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img19} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img20} alt="" />
                </div>

                <div className={style.item}>
                  <Image classname={style.img} src={img25} alt="" />
                </div>
              </div>
              <div className={style.col4}>
                <div className={style.item}>
                  <Image classname={style.img} src={img4} alt="" />
                </div>
                <div className={style.item}>
                  <Image classname={style.img} src={img7} alt="" />
                </div>
                <div className={style.item}>
                  <Image classname={style.img} src={img21} alt="" />
                </div>
                <div className={style.item}>
                  <Image classname={style.img} src={img22} alt="" />
                </div>
                <div className={style.item}>
                  <Image classname={style.img} src={img23} alt="" />
                </div>
                <div className={style.item}>
                  <Image classname={style.img} src={img24} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Fancybox>
      </div>
    </>
  );
}
