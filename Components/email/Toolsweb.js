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
          Beautifully designed, high-converting emails
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
          Email marketing services for your business.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Image-Based Emails</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Send on-brand emails that look great on any screen and are
              compatible with all drag-and-drop email platforms.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Editable Klaviyo Templates</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Fully editable email templates built in Klaviyo with custom
              graphics. Edit text and images or rearrange sections as needed.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Ongoing Email Design</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Spruce up your email marketing with ongoing email design based on
              the frequency of your email sends - weekly, daily, or monthly.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Copywriting</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Get on-brand email copy for your email campaigns. Just tell us the
              details and we’ll take care of it.
            </p>
          </div>
          <div className={style.tool}>
            <h4>On-Brand Design</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              All emails are designed using your brand guidelines - including
              colors, fonts (where possible), imagery and logo, and tone.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Fast Delivery</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Most email designs can be completed within 3 business days.
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
