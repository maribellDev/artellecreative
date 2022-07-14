import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo/Logo-up.svg";
import styles from "../styles/navigation.module.scss";
import style from "../styles/home.module.scss";
import { Navadapt } from "../Components/Navadapt";
import img from "../public/icons/menuimg.svg";

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

      <div className={styles.menu}>
        <input type="radio" name="vkl" id="vkl2" />
        <label style={{ color: "#2E303D", marginRight: "10px" }} htmlFor="vkl2">
          Services
          <span style={{ marginLeft: "10px" }}>
            <Image src={img} alt=""></Image>
          </span>
        </label>
        <div className={styles.navigul}>
          <div className={styles.navserv1}>
            <h3>PACKAGES</h3>
            <Link href={"/services/website-packages"}>
              <a>
                <li>Website Packages</li>
              </a>
            </Link>
            <Link href={"/services/brand-logo-design-packages"}>
              <a>
                <li>Brand & Logo Design Packages</li>
              </a>
            </Link>
            <Link href={"/work"}>
              <a>
                <li>New Business Packages</li>
              </a>
            </Link>
          </div>

          <div
            class="line"
            style={{
              width: "1px",
              height: "222px",
              borderRight: "1px solid  #F9B384",
              margin: "0 29px",
              alignSelf: "center",
            }}
          ></div>
          <div className={styles.navserv2}>
            <h3>SERVICES</h3>
            <Link href={"/work"}>
              <a>
                <li>Email Design</li>
              </a>
            </Link>
            <Link href={"/work"}>
              <a>
                <li> Digital & Print Design</li>
              </a>
            </Link>
            <Link href={"/work"}>
              <a>
                <li>Design Retainer </li>
              </a>
            </Link>
            <Link href={"/work"}>
              <a>
                <li>Website Maintanence</li>
              </a>
            </Link>
            <Link href={"/work"}>
              <a>
                <li>Web Development</li>
              </a>
            </Link>
            <Link href={"/work"}>
              <a>
                <li>Product Photos & Videos</li>
              </a>
            </Link>
          </div>
        </div>

        <input type="radio" name="vk2" id="vkl3" />
        <label style={{ color: "#2E303D", marginRight: "10px" }} htmlFor="vkl3">
          Work
          <span style={{ marginLeft: "10px" }}>
            <Image src={img} alt=""></Image>
          </span>
        </label>
        {/* <div className={styles.navigulwork}>
          <Link href={"/"}>
            <a>
              <li>Case Studies</li>
            </a>
          </Link>
          <Link href={"/work"}>
            <a>
              <li>Our Work</li>
            </a>
          </Link>
        </div> */}

        <Link href={"/pricing"}>
          <a style={{ paddingRight: "30px" }}>Pricing</a>
        </Link>
        <Link href={"/about"}>
          <a style={{ paddingRight: "30px" }}>About</a>
        </Link>
        <Link href={"/blog"}>
          <a style={{ paddingRight: "30px" }}>Blog</a>
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
