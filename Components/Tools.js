import style from "../styles/tools.module.scss";
import Link from "next/link";
import styles from "../styles/home.module.scss";

export default function Tools() {
  return (
    <>
      <div className={style.toolall}>
        <h2
          style={{
            marginBottom: "0px",
            paddingTop: "80px",
          }}
        >
          A well-rounded website strategy
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
          Reach your business goals with a creative website solution.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Strategy-based</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Every beautiful website we make is a result of a thought-out
              approach.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Purposeful websites</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Whether your goal is to get more clients, improve your reputation,
              or sell more products, we design with the end goal in mind.
            </p>
          </div>
          <div className={style.tool}>
            <h4>E-commerce</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Built in e-commerce functionality with conversion optimized
              experience on every device.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Responsive design</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              With over 54% of people browsing the web on phones, we design
              websites that work and look great on any device.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Helpful integrations</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Collect emails, accept payments, or run analytics. We implement
              the needed integrations for your site to run like a powerhouse.
            </p>
          </div>
          <div className={style.tool}>
            <h4>User-friendly CMS</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Keep your website content updated with a convenient dashboard. We
              implement customized CMS that anyone can use.
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
