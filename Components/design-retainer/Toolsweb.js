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
          Professional design for a fraction of the cost
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
          Everything a growing business needs to support its marketing and
          branding needs.
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
              On-brand design for social media. Posts, banners, and everything
              needed for an attractive social media presence.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Email Design</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Design for emails. Send great-looking, high-converting emails to
              your list.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Website Assets</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Update your website with new banners and headers, new article
              images, and more.
            </p>
          </div>
          <div className={style.tool}>
            <h4>On-Demand or Flat Fee</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Pay one flat fee for unlimited designs or request designs on
              demand.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Product Photography</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Need ongoing product photography for any small items? We can help
              with that as well.
            </p>
          </div>
          <div className={style.tool}>
            <h4>3-Day Turnaround</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              3-day turnaround on most designs.
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
