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
            paddingBottom:"40px"
          }}
        >
          How we work
        </h2>
       
        <div className={style.tools}>
          <div className={style.tool}>
            <h3>Design with purpose</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Eye-catching, on-brand design that engages your customers and helps grow your business.
            </p>
          </div>
          <div className={style.tool}>
            <h3>Easy collaboration</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Access design mockups via a link and leave comments exactly where you want updates, making changes and revisions simple.
            </p>
          </div>
          <div className={style.tool}>
            <h3>Flexible fees</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Whether it’s a long-term partnership, a one-off project, or something in between — we’ll find a fee structure that works.
            </p>
          </div>
          <div className={style.tool}>
            <h3>On schedule</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We work on your timeline and adjust priorities to meet deadlines, doing our best to support fast-paced teams.
            </p>
          </div>
          <div className={style.tool}>
            <h3>Making assets work</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We work creatively with what you provide—maximizing your existing photography, graphics, and brand assets to deliver great results.
            </p>
          </div>
          <div className={style.tool}>
            <h3>Your tools, or ours</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              We’re flexible and can work with the project management tools your team already uses—or we can recommend ours.
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
