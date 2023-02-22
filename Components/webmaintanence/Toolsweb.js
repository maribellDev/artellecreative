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
          Ongoing Website Support
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
          Ongoing website support, analytics monitoring, and recommendations.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Analytics Monitoring</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will monitor your website traffic, bounce rate, and conversion
              rate, and provide monthly recommendations on website improvements.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Text Edits</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will make any needed text updates for any of the pages.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Image content</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will swap any needed images to keep your website up-to-date.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Performance Monitoring</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will monitor your website for any broken functionalities,
              links, SSL certs, and make sure everything is working properly.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Recommendations</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will provide routine website recommendations for improving user
              experience, conversion rate, and more.
            </p>
          </div>
          {/* <div className={style.tool}>
            <h4>Technical Support</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We will be available for a specific amount of time post the launch
              of your website to provide additional support if needed and make
              sure everything is running as intended.
            </p>
          </div> */}
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
