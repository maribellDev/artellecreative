import Link from "next/link";
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
                 <img src="/logo/Logo-up.svg" alt="Logo" width={230} height={34} />
            </span>
          </a>
        </Link>
      </div>
      <Navadapt />

      <div className={styles.menu}>
    
        <a className={styles.workon}>
          <span className={styles.orange}>Portfolio</span>
          <span
            style={{
              paddingRight: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <img src="/icons/menuimg.svg" 
            width={10}
            height={10}
            alt=""/>
          </span>
          <div className={styles.navigulwork}>
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
          </div>
        </a>
        <Link href={"/about"}>
          <a className={styles.orange} style={{ paddingRight: "30px" }}>
            About
          </a>
        </Link>
       
        <Link href={"/contact"}>
          <a
            className={styles.orange}
            style={{ paddingRight: "0px", color: "white" }}
          >
            <button className={style.dark}>Get Started</button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
