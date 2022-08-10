import styles from "../styles/navadapt.module.scss";
import Link from "next/link";
import Logo from "../public/logo/Logo-up.svg";
import Image from "next/image";
import img from "../public/icons/menuimg.svg";
import React from "react";

export function Navadapt() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <a>
            <span className={styles.logo}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
        </Link>
        <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
        <label className={styles.menuIcon} forhtml={styles.menuBtn}>
          <span className={styles.navicon}></span>
        </label>
        <ul className={styles.menu}>
          <input type="checkbox" name="on" id="serv" className={styles.serv} />
          <label className={styles.label} htmlFor="serv">
            Services
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
              <Image src={img} alt=""></Image>
            </span>
          </label>

          <div className={styles.navigul}>
            <h3>PACKAGES </h3>
            <Link href={"/services/website-packages"}>
              <a>
                <li>Website Packages</li>
              </a>
            </Link>
            <Link href={"/services/brand-logo-design-packages"}>
              <a>
                <li>Brand &amp; Logo Design Packages</li>
              </a>
            </Link>
            <Link href={"/services/new-business-packages"}>
              <a>
                <li>New Business Packages</li>
              </a>
            </Link>

            <h3>SERVICES</h3>
            <Link href={"/services/email-design"}>
              <a>
                <li>Email Design</li>
              </a>
            </Link>
            <Link href={"/services/digital-&-print-design"}>
              <a>
                <li> Digital &amp; Print Design</li>
              </a>
            </Link>
            <Link href={"/services/design-retainer"}>
              <a>
                <li>Design Retainer </li>
              </a>
            </Link>
            <Link href={"/services/website-maintanence"}>
              <a>
                <li>Website Support</li>
              </a>
            </Link>
            <Link href={"/services/web-development"}>
              <a>
                <li>Web Development</li>
              </a>
            </Link>
            <Link href={"/services/product-photos-&-videos"}>
              <a>
                <li>Product Photos &amp; Videos</li>
              </a>
            </Link>
          </div>

          <input type="checkbox" name="on" id="work" className={styles.work} />
          <label className={styles.label} htmlFor="work">
            Work
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
              <Image src={img} alt=""></Image>
            </span>
          </label>

          <div className={styles.navwork}>
            <Link href={"/work"}>
              <a>
                <li>Case Studies</li>
              </a>
            </Link>
            <Link href={"/gallery"}>
              <a>
                <li>Our Work</li>
              </a>
            </Link>
          </div>
          <li className={styles.navLi}>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
