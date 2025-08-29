import Link from "next/link";
import style from "../styles/footer.module.scss";



export function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footermain}>
          <div className={style.form}>
            <h3>Join the list</h3>
            
            <div className={style.logofooter}>
              <Link href={"/"}>
                <a>
                  <span className={style.logo1}>
                    <img src="/logo/Logo-footer.svg" alt="Logo" />
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
                    <img src="/icons/instagram-icon.svg" alt="instagram" />
                  </span>
                </a>

                <a
                  href={"https://www.facebook.com/ArtelleCreative"} rel="nofollow"
                  target="_blanc"
                >
                  <span className={style.facebook}>
                    <img src="/icons/facebook-icon.svg" alt="facebook" />
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
                  <a>Portfolio</a>
                </Link>
              </li>
             
              <li style={{ paddingBottom: "10px" }}>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </li>
             
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
