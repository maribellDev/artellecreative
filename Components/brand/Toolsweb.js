import style from "../../styles/tools.module.scss";
import Link from "next/link";
import styles from "../../styles/home.module.scss";

export default function Toolsweb() {
  return (
    <>
      <div className={style.toolall}>
        <h2
          style={{
            marginBottom: "0px",
            paddingTop: "80px",
          }}
        >
          Stand out from the competition with dynamic brand design
        </h2>
        <p
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          All brand design services are custom and tailored to your business.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Logo Design</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              This includes a logo with all variations, including your primary
              logo, any secondary logos, custom marks, and/or brand icons.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Visual Identity</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Custom color palettes, typography, visuals guide, and other
              elements that define the look and feel of your brand.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Brand Style Guide</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Helpful document outlining brand standards, including logo,
              colors, type hierarchies, and other notes, to help keep the
              visuals of your brand consistent and on-brand.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Print Marketing Assets</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Printed items like business cards, brand stationery, sales
              materials, packaging, signage or other physical materials.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Digital Marketing Assets</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Items to help with digital marketing, including social media
              banners and posts, email marketing templates, online
              advertisements, sales pdfs, lead generation magnets, and other
              digital items.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Brand Imagery</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Product photos, illustrations, stock photography, iconography, and
              other visual elements to help with brand recognition
            </p>
          </div>
        </div>
        <div className={style.btnServices}>
          <Link href="/contact">
            <a style={{ paddingRight: "0px", color: "white" }}>
              <button className={styles.dark}>Get Started </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
