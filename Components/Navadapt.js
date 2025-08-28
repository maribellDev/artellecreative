import styles from "../styles/navadapt.module.scss";
import Link from "next/link";
import Logo from "../public/logo/Logo-up.svg";
import Image from "next/image";
import img from "../public/icons/menuimg.svg";
import React from "react";
import { style } from "@mui/system";

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
          

         

          <input type="checkbox" name="on" id="work" className={styles.work} />
          <label className={styles.label} htmlFor="work">
            Portfolio
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
              <Image src={img} alt=""></Image>
            </span>
          </label>

          <div className={styles.navwork}>
          <Link href={"/work"}>
                <a>
                  <li>Website &amp; Branding</li>
                </a>
              </Link>
              <Link href={"/marketing-design"}>
                <a>
                  <li>Marketing Design</li>
                </a>
              </Link>
          </div>
         
          <li className={styles.navLi}>
            <Link href="/about">
              <a>About</a>
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
