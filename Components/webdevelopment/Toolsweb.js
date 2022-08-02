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
          Capabilities
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
          Web development from existing design files.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>WordPress Development</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Custom WordPress theme development.
            </p>
          </div>
          <div className={style.tool}>
            <h4>React Development</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Custom development using React.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Responsive Development</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              All web development is responsive and looks great on any screen.
            </p>
          </div>
          <div className={style.tool}>
            <h4>CMS Integration</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Easily edit website content with an integrated Content Management
              System.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Search Engine Optimization</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Includes keyword implementation, image optimization, and all
              metadata and alt text.
            </p>
          </div>
          <div className={style.tool}>
            <h4>External Integrations</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We integrate any needed third-party functionalities.
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
