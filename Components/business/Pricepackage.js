import Link from "next/link";
import styles from "../../styles/home.module.scss";
import style from "../../styles/pricepackage.module.scss";

export default function Pricepackage() {
  return (
    <>
      <div className={style.priceblock}>
        <h2>New Business Website &amp; Branding Packages</h2>
        <p>Packages to cover all your design needs. Payment plans available.</p>
        <div className={style.pricepackage}>
          <div className={style.pricecard}>
            <p className={style.title}>Starter - $200 off</p>
            <p className={style.cost}>$3,800</p>
            <p className={style.text}>
              Everything included in the 3 page Website Package + base Brand
              Package.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <div className={style.ulclass}>
              <ul>
                <li>Website w/ up to 3 Pages</li>
                <li>Custom Design &amp; Development</li>
                <li>Discovery Consultation via Zoom</li>
                <li>Copywriting</li>
                <li>Foundational SEO</li>
                <li>Primary Logo Design + Variations</li>
                <li>1 Brand Material</li>
                <li>Color Palette and Fonts</li>
                <li>Social Media Banner</li>
                <li>One Page Style Guide Document</li>
                <li>Google Drive Folder With All Files</li>
              </ul>
            </div>
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
            <p className={style.title}>Mid - $400 off</p>
            <p className={style.cost}>$6,600</p>
            <p className={style.text}>
              Everything included in the 6 page Website Package + Full Brand
              Package.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <div className={style.ulclass}>
              <ul>
                <li>Website w/ up to 6 Pages</li>
                <li>Custom Design &amp; Development</li>
                <li>Discovery Consultation via Zoom</li>
                <li>Copywriting</li>
                <li>Foundational SEO</li>
                <li>Primary Logo Design + Variations</li>
                <li>2 Brand Material</li>
                <li>Full Stationery Suite Design</li>
                <li>Full Social Media Suite Design</li>
                <li>Extensive Style Guide Document</li>
                <li>Google Drive Folder With All Files</li>
              </ul>
            </div>
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
            <p className={style.title}>Full - $800 off</p>
            <p className={style.cost}>$8,400</p>
            <p className={style.text}>
              Everything included in the 12 page Website Package + Full Brand
              Package.
            </p>
            <hr width="100%" size="1" color="#FFF4E4" />
            <div className={style.ulclass}>
              <ul>
                <li>Website w/ up to 12 Pages</li>
                <li>Custom Design &amp; Development</li>
                <li>Discovery Consultation via Zoom</li>
                <li>Copywriting</li>
                <li>Foundational SEO</li>
                <li>Primary Logo Design + Variations</li>
                <li>3 Brand Material</li>
                <li>Full Stationery Suite Design</li>
                <li>Full Social Media Suite Design</li>
                <li>Extensive Style Guide Document</li>
                <li>+ 2 Weeks of Unlimited Design Support</li>
              </ul>
            </div>
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
