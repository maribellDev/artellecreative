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
          Eye-catching Branding and Marketing materials
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
          Create a visual consistency between your branding materials.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Social Media Graphics</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              On-brand social media posts, stories, and banners.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Printed Materials</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Marketing and branding design for print.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Company Decks</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Presentation and PDF design for your company.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Digital Materials</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Lead generation magnets and ebook layout and design.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Packaging Labels and Inserts</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              On-brand design for packaging collateral.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Brand Materials</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Stationery design, business cards or signage.
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
