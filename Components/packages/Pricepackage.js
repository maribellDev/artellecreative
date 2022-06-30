import Link from "next/link";
import styles from "../../styles/home.module.scss";
import style from "../../styles/pricepackage.module.scss";

export default function Pricepackage() {
  return (
    <>
      <div className={style.priceblock}>
        <h2>Website Package Pricing</h2>
        <p>Transparent pricing for our website design services.</p>
        <div className={style.pricepackage}>
          <div className={style.pricecard}>
            <p className={style.title}>One Page Love</p>
            <p className={style.cost}>$2,800</p>
            <p className={style.text}>
              Great design and functionality, minus the extras.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <ul>
              <li>Single page website</li>
              <li>Custom design</li>
              <li>Responsive development</li>
              <li>Copywriting</li>
              <li>Contact form</li>
              <li>Basic SEO</li>
              <li>Hosting & Domain for 1 year</li>
              <li>Google Analytics intergartion</li>
              <li>1 week of post-launch support</li>
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
            <p className={style.title}>One Page Love</p>
            <p className={style.cost}>$2,800</p>
            <p className={style.text}>
              Great design and functionality, minus the extras.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <ul>
              <li>Single page website</li>
              <li>Custom design</li>
              <li>Responsive development</li>
              <li>Copywriting</li>
              <li>Contact form</li>
              <li>Basic SEO</li>
              <li>Hosting & Domain for 1 year</li>
              <li>Google Analytics intergartion</li>
              <li>1 week of post-launch support</li>
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
            <p className={style.title}>One Page Love</p>
            <p className={style.cost}>$2,800</p>
            <p className={style.text}>
              Great design and functionality, minus the extras.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <ul>
              <li>Single page website</li>
              <li>Custom design</li>
              <li>Responsive development</li>
              <li>Copywriting</li>
              <li>Contact form</li>
              <li>Basic SEO</li>
              <li>Hosting & Domain for 1 year</li>
              <li>Google Analytics intergartion</li>
              <li>1 week of post-launch support</li>
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
