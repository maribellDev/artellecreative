import Image from "next/image";
import style from "../../styles/gallery.module.scss";
import Fancybox from "./fancybox.js";

export function Gallery() {
  // Массив всех ссылок на изображения
  const images = [
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/CT-1_b4g75t.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743009/Artelle%20gallery/CT-2_mf9q5z.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743008/Artelle%20gallery/CT-3_uhxubi.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743009/Artelle%20gallery/CT-4_ss8v1d.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/CT-5_ulhhmg.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/CT-6_ngxmcr.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743024/Artelle%20gallery/MP-6_acmjaj.gif",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743022/Artelle%20gallery/PH-1_lfgh86.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743023/Artelle%20gallery/PH-2_gbcjo0.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743024/Artelle%20gallery/PH-3_xvdd9o.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743030/Artelle%20gallery/SP-2_iqmqfd.png",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743024/Artelle%20gallery/PR-1_tzxgtg.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743010/Artelle%20gallery/DBB-2_mzzkly.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743011/Artelle%20gallery/DO-1_xwfn25.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743011/Artelle%20gallery/DO-2_ztlf3k.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743011/Artelle%20gallery/DO-3_eeztvs.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MM-1_p9gijx.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MM-2_rfjlsj.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MP-1_fpnfcy.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743030/Artelle%20gallery/SP-3_earggc.png",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743028/Artelle%20gallery/SR-1_ijarhr.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743029/Artelle%20gallery/SR-2_gpmcl4.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743032/Artelle%20gallery/VTMN-1_ecbmju.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743012/Artelle%20gallery/LH-1_awotot.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743013/Artelle%20gallery/LH-2_zfyqbe.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743013/Artelle%20gallery/LH-3_if32sx.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743014/Artelle%20gallery/LH-4_osn4oh.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743014/Artelle%20gallery/LH-5_uqkq86.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743015/Artelle%20gallery/LHe-1_h7gabp.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743015/Artelle%20gallery/LHe-2_a1gfp3.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743016/Artelle%20gallery/LHe-3_tw6feu.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743017/Artelle%20gallery/LHe-4_pbntqw.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743016/Artelle%20gallery/LI-1_c7ny3q.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743017/Artelle%20gallery/LI-3_wtagcs.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743018/Artelle%20gallery/MG-1_lsnhvw.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743018/Artelle%20gallery/MG-2_t6xuq0.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743020/Artelle%20gallery/MP-2_kgckzl.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743021/Artelle%20gallery/MP-3_qcmm1d.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743022/Artelle%20gallery/MP-4_u7mr5d.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743021/Artelle%20gallery/MP-5_wma5gp.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743031/Artelle%20gallery/VTMN-3_cu8ghb.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743032/Artelle%20gallery/VTMN-2_tocppn.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743031/Artelle%20gallery/SP-1_v1ddob.png",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743032/Artelle%20gallery/SR-3_okmsup.gif",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743025/Artelle%20gallery/PR-2_yaagm8.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1697743026/Artelle%20gallery/PR-3_ckaf68.gif",
  ];

return (
    <div className={style.container}>
      <div className={style.mainname}>
        <p
          style={{
            marginBottom: "-9px",
            letterSpacing: "1.4px",
            fontWeight: 700,
            textAlign: "left",
            fontSize: 14,
          }}
        >
          OUR WORK
        </p>
        <h1 id="headerWorkpage" className={style.hHeader}>
          Marketing Design
        </h1>
      </div>

      <Fancybox>
        <div className={style.galleryGrid}>
          {images.map((src, i) => (
            <div key={i} className={style.galleryItem}>
              <a data-fancybox="gallery" href={src} aria-label={`Open image ${i + 1}`}>
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  className={style.image}
                />
              </a>
            </div>
          ))}
        </div>
      </Fancybox>
    </div>
  );
}