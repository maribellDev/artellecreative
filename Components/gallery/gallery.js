import Image from "next/image";


import style from "../../styles/gallery.module.scss";
import img1 from "../../public/gallery/CT-1.jpg";
import img2 from "../../public/gallery/CT-2.jpg";
import img3 from "../../public/gallery/CT-3.jpg";
import img4 from "../../public/gallery/CT-4.jpg";
import img5 from "../../public/gallery/CT-5.jpg";
import img6 from "../../public/gallery/CT-6.jpg";
import img7 from "../../public/gallery/DBB-1.jpg";
import img8 from "../../public/gallery/DBB-2.jpg";
import img9 from "../../public/gallery/DO-1.jpg";
import img10 from "../../public/gallery/DO-2.jpg";
import img11 from "../../public/gallery/DO-3.jpg";
import img12 from "../../public/gallery/LH-1.jpg";
import img13 from "../../public/gallery/LH-2.jpg";
import img14 from "../../public/gallery/LH-3.jpg";
import img15 from "../../public/gallery/LH-4.jpg";
import img16 from "../../public/gallery/LH-5.jpg";
import img17 from "../../public/gallery/LHe-1.jpg";
import img18 from "../../public/gallery/LHe-2.jpg";
import img19 from "../../public/gallery/LHe-3.jpg";
import img20 from "../../public/gallery/LHe-4.jpg";
import img21 from "../../public/gallery/LI-1.jpg";
// import img22 from "../../public/gallery/LI-2.mp4";
import img23 from "../../public/gallery/LI-3.jpg";
// import img24 from "../../public/gallery/LI-4.mp4";
import img25 from "../../public/gallery/MG-1.jpg";
import img26 from "../../public/gallery/MG-2.jpg";
import img27 from "../../public/gallery/MM-1.jpg";
import img28 from "../../public/gallery/MM-2.jpg";
import img29 from "../../public/gallery/MP-1.jpg";
import img30 from "../../public/gallery/MP-2.jpg";
import img31 from "../../public/gallery/MP-3.jpg";
import img32 from "../../public/gallery/MP-4.jpg";
import img33 from "../../public/gallery/MP-5.jpg";
import img34 from "../../public/gallery/MP-6.gif";
import img35 from "../../public/gallery/PH-1.jpg";
import img36 from "../../public/gallery/PH-2.jpg";
import img37 from "../../public/gallery/PH-3.jpg";
import img38 from "../../public/gallery/PR-1.jpg";
import img39 from "../../public/gallery/PR-2.jpg";
import img40 from "../../public/gallery/PR-3.gif";
import img41 from "../../public/gallery/SP-1.png";
import img42 from "../../public/gallery/SP-2.png";
import img43 from "../../public/gallery/SP-3.png";
import img44 from "../../public/gallery/SR-1.jpg";
import img45 from "../../public/gallery/SR-2.jpg";
import img46 from "../../public/gallery/SR-3.gif";
import img47 from "../../public/gallery/VTMN-1.jpg";
import img48 from "../../public/gallery/VTMN-2.jpg";
import img49 from "../../public/gallery/VTMN-3.jpg";

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
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/CT-1_b4g75t.jpg"
                  >
                    <Image classname={style.img} src={img1} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743009/Artelle%20gallery/CT-2_mf9q5z.jpg"
                  >
                    <Image classname={style.img} src={img2} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743008/Artelle%20gallery/CT-3_uhxubi.jpg"
                  >
                    <Image classname={style.img} src={img3} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743009/Artelle%20gallery/CT-4_ss8v1d.jpg"
                  >
                    <Image classname={style.img} src={img4} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/CT-5_ulhhmg.jpg"
                  >
                    <Image classname={style.img} src={img5} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/CT-6_ngxmcr.jpg"
                  >
                    <Image classname={style.img} src={img6} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743024/Artelle%20gallery/MP-6_acmjaj.gif"
                  >
                    <Image classname={style.img} src={img34} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743022/Artelle%20gallery/PH-1_lfgh86.jpg"
                  >
                    <Image classname={style.img} src={img35} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743023/Artelle%20gallery/PH-2_gbcjo0.jpg"
                  >
                    <Image classname={style.img} src={img36} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743024/Artelle%20gallery/PH-3_xvdd9o.jpg"
                  >
                    <Image classname={style.img} src={img37} alt="" />
                  </a>
                </div>
              
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743030/Artelle%20gallery/SP-2_iqmqfd.png"
                  >
                    <Image classname={style.img} src={img42} alt="" />
                  </a>
                </div>
              </div>
              <div className={style.col2}>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743024/Artelle%20gallery/PR-1_tzxgtg.jpg"
                  >
                    <Image classname={style.img} src={img7} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/DBB-2_mzzkly.jpg"
                  >
                    <Image classname={style.img} src={img8} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743011/Artelle%20gallery/DO-1_xwfn25.jpg"
                  >
                    <Image classname={style.img} src={img9} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743011/Artelle%20gallery/DO-2_ztlf3k.jpg"
                  >
                    <Image classname={style.img} src={img10} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743011/Artelle%20gallery/DO-3_eeztvs.jpg"
                  >
                    <Image classname={style.img} src={img11} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MM-1_p9gijx.jpg"
                  >
                    <Image classname={style.img} src={img27} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MM-2_rfjlsj.jpg"
                  >
                    <Image classname={style.img} src={img28} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MP-1_fpnfcy.jpg"
                  >
                    <Image classname={style.img} src={img29} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743030/Artelle%20gallery/SP-3_earggc.png"
                  >
                    <Image classname={style.img} src={img43} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743028/Artelle%20gallery/SR-1_ijarhr.jpg"
                  >
                    <Image classname={style.img} src={img44} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743029/Artelle%20gallery/SR-2_gpmcl4.jpg"
                  >
                    <Image classname={style.img} src={img45} alt="" />
                  </a>
                </div>
                
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743032/Artelle%20gallery/VTMN-1_ecbmju.jpg"
                  >
                    <Image classname={style.img} src={img47} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className={style.part2}>
              <div className={style.col3}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743012/Artelle%20gallery/LH-1_awotot.jpg"
                  >
                    <Image classname={style.img} src={img12} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743013/Artelle%20gallery/LH-2_zfyqbe.jpg"
                  >
                    <Image classname={style.img} src={img13} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743013/Artelle%20gallery/LH-3_if32sx.jpg"
                  >
                    <Image classname={style.img} src={img14} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743014/Artelle%20gallery/LH-4_osn4oh.jpg"
                  >
                    <Image classname={style.img} src={img15} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743014/Artelle%20gallery/LH-5_uqkq86.jpg"
                  >
                    <Image classname={style.img} src={img16} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743015/Artelle%20gallery/LHe-1_h7gabp.jpg"
                  >
                    <Image classname={style.img} src={img17} alt="" />
                  </a>
                </div>

                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743015/Artelle%20gallery/LHe-2_a1gfp3.jpg"
                  >
                    <Image classname={style.img} src={img18} alt="" />
                  </a>
                </div>
               
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743025/Artelle%20gallery/PR-2_yaagm8.jpg"
                  >
                    <Image classname={style.img} src={img39} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743026/Artelle%20gallery/PR-3_ckaf68.gif"
                  >
                    <Image classname={style.img} src={img40} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743031/Artelle%20gallery/SP-1_v1ddob.png"
                  >
                    <Image classname={style.img} src={img41} alt="" />
                  </a>
                </div>
                
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743032/Artelle%20gallery/SR-3_okmsup.gif"
                  >
                    <Image classname={style.img} src={img46} alt="" />
                  </a>
                </div>
              </div>
              <div className={style.col4}>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743016/Artelle%20gallery/LHe-3_tw6feu.jpg"
                  >
                    <Image classname={style.img} src={img19} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743017/Artelle%20gallery/LHe-4_pbntqw.jpg"
                  >
                    <Image classname={style.img} src={img20} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743016/Artelle%20gallery/LI-1_c7ny3q.jpg"
                  >
                    <Image classname={style.img} src={img21} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743017/Artelle%20gallery/LI-3_wtagcs.jpg"
                  >
                    <Image classname={style.img} src={img23} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743018/Artelle%20gallery/MG-1_lsnhvw.jpg"
                  >
                    <Image classname={style.img} src={img25} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743018/Artelle%20gallery/MG-2_t6xuq0.jpg"
                  >
                    <Image classname={style.img} src={img26} alt="" />
                  </a>
                </div>
                
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MP-2_kgckzl.jpg"
                  >
                    <Image classname={style.img} src={img30} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743021/Artelle%20gallery/MP-3_qcmm1d.jpg"
                  >
                    <Image classname={style.img} src={img31} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743022/Artelle%20gallery/MP-4_u7mr5d.jpg"
                  >
                    <Image classname={style.img} src={img32} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743021/Artelle%20gallery/MP-5_wma5gp.jpg"
                  >
                    <Image classname={style.img} src={img33} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743031/Artelle%20gallery/VTMN-3_cu8ghb.jpg"
                  >
                    <Image classname={style.img} src={img49} alt="" />
                  </a>
                </div>
                <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743032/Artelle%20gallery/VTMN-2_tocppn.jpg"
                  >
                    <Image classname={style.img} src={img48} alt="" />
                  </a>
                </div>
                {/* <div className={style.item}>
                  <a
                    data-fancybox="gallery"
                    href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743009/Artelle%20gallery/DBB-1_vgjqxi.jpg"
                  >
                    <Image classname={style.img} src={img38} alt="" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </Fancybox>
      </div>
    </>
  );
}
