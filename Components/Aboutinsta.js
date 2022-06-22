import Image from "next/image";
//import style from "../styles/home.module.scss";
import styles from "../styles/aboutinsta.module.scss";
import img from "../public/img/aboutinsta.png";
import Link from "next/link";
export function Aboutinsta() {
  return (
    <>
      <div className={styles.backgr}>
        <div className={styles.instablock}>
          <div className={styles.instaimg}>
            <Image src={img} alt="instagram-foto" />
          </div>

          <div
            className={styles.instatext}
            style={{
              margin: "auto 0 auto 0",
              maxWidth: "449px",
            }}
          >
            <p className={styles.place}>
              Based in Port St. Lucie, Florida working with clients anywhere.
            </p>

            <p className={styles.description}>
              On any given day we might be skydiving, baking pies, or posting
              cute cat videos. You never know what you’re going to get - follow
              to find out :)
            </p>
            <p className={styles.linkinsta}>
              {" "}
              <Link href={"/about"}>
                <a>Go to Instagram</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
