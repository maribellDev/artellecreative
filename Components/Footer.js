import Link from "next/link";
import Image from "next/image";
import Insta from "../public/icons/instagram-icon.svg";
import Facebook from "../public/icons/facebook-icon.svg";
import style from "../styles/footer.module.scss";
import Logo from "../public/logo/Logo-footer.svg";
import Form from "./Form";

export function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footermain}>
          <div className={style.form}>
            <h3>Join the list</h3>
            <Form />

            <div className={style.logofooter}>
              <Link href={"/"}>
                <a>
                  <span className={style.logo1}>
                    <Image src={Logo} alt="Logo" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.contactfooter}>
            <h3>Contact us</h3>
            <p className={style.email}>hello&#64;artellecreative.com</p>
            <div className={style.follow}>
              <h3>Follow along</h3>
              <div className={style.social}>
                <a
                  href={"https://www.instagram.com/artellecreative/"} rel="nofollow"
                  target="_blanc"
                >
                  <span className={style.insta}>
                    <Image src={Insta} alt="instagram" />
                  </span>
                </a>

                <a
                  href={"https://www.facebook.com/ArtelleCreative"} rel="nofollow"
                  target="_blanc"
                >
                  <span className={style.facebook}>
                    <Image src={Facebook} alt="facebook" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <ul className={style.menufooter}>
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/work"}>
                  <a>Work</a>
                </Link>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/pricing"}>
                  <a>Pricing</a>
                </Link>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </li>
              {/* <li style={{ paddingBottom: "10px" }}>
                <Link href={"/blog"}>
                  <a>Blog</a>
                </Link>
              </li> */}
              <li>
                <Link href={"/contact"}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.privacy}>
          <div>
            <Link href={"../policy/policy"}>
              <a target="_blanc">Cookie Policy</a>
            </Link>
          </div>
          <div>
            <Link href={"../policy/privacy"}>
              <a target="_blanc">Privacy Policy</a>
            </Link>
          </div>
          <div>
            <Link href={"../policy/terms"}>
              <a target="_blanc">Terms &amp; Conditions</a>
            </Link>
          </div>
          <div>
            <a>&copy; Artelle Creative 2022. All rights reserved.</a>
          </div>
        </div>
      </footer>
    </>
  );
}
