import Link from "next/link";
import styles from "../../styles/home.module.scss";
import style from "../../styles/pricepackage.module.scss";

export default function Pricepackage() {
  return (
    <>
      <div className={style.priceblock}>
        <h2>Website Package Pricing</h2>
        <p>
          Transparent pricing to set you up with a new website. Payment plans
          available.
        </p>
        <div className={style.pricepackage}>
          <div className={style.pricecard}>
            <p className={style.title}>Up to 3 Pages</p>
            <p className={style.cost}>$2,800</p>
            <p className={style.text}>
              Establish an engaging digital presence with a branded website.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <ul>
              <li>Complete Design &amp; Development</li>
              <li>Discovery Consultation via Zoom</li>
              <li>Responsive Mobile Development</li>
              <li>Copywriting</li>
              <li>Foundational SEO</li>
              <li>Google Analytics Integration</li>
              <li>Hosting &amp; Domain for 1 year</li>
              <li>Post-Launch Training</li>
              <li>7 Days of Post-Launch Support</li>
            </ul>
            <hr width="100%" size="1" color="#FFF4E4" />
            <div className={style.btnServices}>
              <Link href="/contact">
                <a style={{ paddingRight: "0px", color: "white" }}>
                  <button className={styles.dark}>Get Started </button>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.pricecard}>
            {" "}
            <p className={style.title}>Up to 6 Pages</p>
            <p className={style.cost}>$4,200</p>
            <p className={style.text}>
              Propel your business forward with a website designed for growth.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <ul>
              <li>Complete Design &amp; Development</li>
              <li>Discovery Consultation via Zoom</li>
              <li>Responsive Mobile Development</li>
              <li>Copywriting</li>
              <li>Foundational SEO</li>
              <li>Google Analytics Integration</li>
              <li>Hosting &amp; Domain for 1 year</li>
              <li>Post-Launch Training</li>
              <li>14 Days of Post-Launch Support</li>
            </ul>
            <hr width="100%" size="1" color="#FFF4E4" />
            <div className={style.btnServices}>
              <Link href="/contact">
                <a style={{ paddingRight: "0px", color: "white" }}>
                  <button className={styles.dark}>Get Started </button>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.pricecard}>
            {" "}
            <p className={style.title}>Up to 12 Pages</p>
            <p className={style.cost}>$6,400</p>
            <p className={style.text}>
              Scale your business with a website powerhouse that vouches for
              you.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <ul>
              <li>Complete Design &amp; Development</li>
              <li>Discovery Consultation via Zoom</li>
              <li>Responsive Mobile Development</li>
              <li>Copywriting</li>
              <li>Foundational SEO</li>
              <li>Google Analytics Integration</li>
              <li>Hosting &amp; Domain for 1 year</li>
              <li>Post-Launch Training</li>
              <li>30 Days of Post-Launch Support</li>
            </ul>
            <hr width="100%" size="1" color="#FFF4E4" />
            <div className={style.btnServices}>
              <Link href="/contact">
                <a style={{ paddingRight: "0px", color: "white" }}>
                  <button className={styles.dark}>Get Started </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
