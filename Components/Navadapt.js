import styles from "../styles/navadapt.module.scss";
import Link from "next/link";
import Logo from "../public/logo/Logo-up.svg";
import Image from "next/image";

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
          <li className={styles.navLi}>
            <Link href="/work">
              <a>Work</a>
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
