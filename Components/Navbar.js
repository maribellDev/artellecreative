import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo/Logo-up.svg";
import styles from "../styles/navigation.module.scss";
import style from "../styles/home.module.scss";
import { Navadapt } from "../Components/Navadapt";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href={"/"}>
          <a>
            <span className={styles.logo1}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
        </Link>
      </div>
      <Navadapt />
      <div></div>
      <div className={styles.btnMenu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>

      <div className={styles.menu}>
        <Link href={"/services"}>
          <a>Services</a>
        </Link>
        <Link href={"/work"}>
          <a>Work</a>
        </Link>

        <Link href={"/pricing"}>
          <a>Pricing</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/blog"}>
          <a>Blog</a>
        </Link>

        <Link href={"/contact"}>
          <a style={{ paddingRight: "0px", color: "white" }}>
            <button className={style.dark}>Get Started</button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
