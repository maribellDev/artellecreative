import Image from "next/image";
// import Link from "next/link";
// import lightGallery from 'lightgallery';

// // Plugins
// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'

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
        <h2>Our work</h2>
        <p className={style.text}>
          We help companies look their best. Take a look at our work.
        </p>

        <Fancybox>
          <div className={style.gallerypackage}>
            <div className={style.part1}>
              <div className={style.col1}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/EmailDesign5_wxnegk.jpg"
                  >
                    <Image classname={style.img} src={img5} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/NT-gif_hfuknj.gif"
                  >
                    <Image classname={style.img} src={img8} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/BakingKit2_wo4jce.jpg"
                  >
                    <Image classname={style.img} src={img9} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/EmailDesign3_yci188.jpg"
                  >
                    <Image classname={style.img} src={img10} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109611/BabyKtan_wdkm8p.jpg"
                  >
                    <Image classname={style.img} src={img11} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/MG2_dbfu83.jpg"
                  >
                    <Image classname={style.img} src={img12} alt="" />
                  </a>
                </div>
              </div>
              <div className={style.col2}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/myphoto1_xrw2ix.jpg"
                  >
                    <Image classname={style.img} src={img2} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/MG1_qglj7z.jpg"
                  >
                    <Image classname={style.img} src={img1} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/MG3_etovp1.jpg"
                  >
                    <Image classname={style.img} src={img13} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/myphoto2_ge9dd7.jpg"
                  >
                    <Image classname={style.img} src={img14} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/NomadTechy1_hjujkh.jpg"
                  >
                    <Image classname={style.img} src={img15} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/NT-full_oarpnz.jpg"
                  >
                    <Image classname={style.img} src={img16} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.part2}>
              <div className={style.col3}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/Thrive_StyleGuide_nbqcfl.jpg"
                  >
                    <Image classname={style.img} src={img6} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/lights_july4_nwqxo1.jpg"
                  >
                    <Image classname={style.img} src={img3} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/PhotoGifts_Decor1_bviqow.jpg"
                  >
                    <Image classname={style.img} src={img17} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/PhotoGifts_Decor2_spazqm.jpg"
                  >
                    <Image classname={style.img} src={img18} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/PhotoGifts_Decor3_jjerrd.jpg"
                  >
                    <Image classname={style.img} src={img19} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/StockingStuffers_trkfdn.jpg"
                  >
                    <Image classname={style.img} src={img20} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109614/vday_block_ojv1aj.gif"
                  >
                    <Image classname={style.img} src={img25} alt="" />
                  </a>
                </div>
              </div>
              <div className={style.col4}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109612/360block_lsnl5y.gif"
                  >
                    <Image classname={style.img} src={img4} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/TheArtelleWebsite-blog_tm905p.jpg"
                  >
                    <Image classname={style.img} src={img7} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/TheArtelle-blog_bltrhe.jpg"
                  >
                    <Image classname={style.img} src={img21} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/TheArtelleWebsite-blog_tm905p.jpg"
                  >
                    <Image classname={style.img} src={img22} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109613/Thrive_StyleGuide_nbqcfl.jpg"
                  >
                    <Image classname={style.img} src={img23} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1659109614/ThriveWomensConference_croglg.jpg"
                  >
                    <Image classname={style.img} src={img24} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fancybox>
      </div>
    </>
  );
}
