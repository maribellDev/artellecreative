import style from "../../styles/gallery.module.scss";
import Fancybox from "./fancybox.js";

export function Gallery() {
  // Массив всех ссылок на изображения
  const images = [
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857195/LI-3_wtagcs.jpg_gb6ori.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857195/Lids-Img3_mafb1u.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857194/LI-1_c7ny3q.jpg_ennwt4.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857190/LHe-4_pbntqw.jpg_pi1w6d.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857190/LHe-3_tw6feu.jpg_gh0xql.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857189/LHe-2_a1gfp3.jpg_zbybgx.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857186/LH-5_uqkq86.jpg_rg4m1z.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857187/LHe-1_h7gabp.jpg_mrberl.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857186/LH-4_osn4oh.jpg_gfcklz.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857180/LH-2_zfyqbe.jpg_lx6hwi.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857180/LH-3_if32sx.jpg_rwhieb.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857179/GS-peanut-butter-4_kqbtj2.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857179/labor-day-email-new_customers_k3yvis.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857179/LH-1_awotot.jpg_cqc4vp.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857174/GS-peanut-butter-3_h6mqap.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857172/email-3-treat_yavfph.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857171/Gaskets-Img2_ddkrpu.jpg",
    "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857172/Gaskets-Img3_yoppyy.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857171/DSC06320_1_cp1u1r.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857165/DSC06136a_1_huxmq0.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857165/DSC00321_akuhm8.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857164/DSC00227_rrtjbk.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857164/DSC00204_jlsjxd.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857157/DO-2_ztlf3k.jpg_aet3gf.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857157/DO_FashionBrands_zqssyi.png",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857158/DO-3_eeztvs.jpg_beho6y.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857157/DO_1024_ArmaniExchange_v9prrq.png",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857157/DO_1223_ArmaniExchange_szdlxz.png",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857152/DBB-2_mzzkly.jpg_d3rsxw.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857150/DBB-1.95f471b1.jpg_1_alswf3.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857150/Current_customers_wcjowa.jpg",
  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1756857150/chicken_rabbit-flash-sale-SENT_cftdtw.jpg",

  
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