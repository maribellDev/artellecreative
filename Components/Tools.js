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
          How we work
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
          Let’s start off on the right foot.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Consistent process</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We have a consistent and tested process for everything. And when
              the process works - so does the outcome.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Transparent pricing</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Clear and predictable pricing for most projects. No matter the
              size or revenue of your business, our pricing stays the same.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Flexible approach</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Whether you need help with a single project or looking for a
              long-term partnership, we can work with a project of any size.
            </p>
          </div>
          <div className={style.tool}>
            <h4>1-on-1 communication</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Ana will stay in communication with you throughout the whole
              project, answering any questions and making sure everything is
              covered.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Design strategy</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We'll work closely with you to understand your goals and design
              something you and your audience needs.
            </p>
          </div>
          <div className={style.tool}>
            <h4>All needs covered</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We got all your creative needs covered from new business website
              and brading to ongoing marketing design needs.
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
