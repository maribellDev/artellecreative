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
            <Image
              style={{ maxWidth: "425px" }}
              src={img}
              alt="instagram-foto"
            />
          </div>

          <div
            className={styles.instatext}
            style={{
              margin: "auto 0 auto 0",
              maxWidth: "449px",
            }}
          >
            <p className={styles.place}>
              Working out of different corners of the world, but calling Port
              St. Lucie, Florida - home.
            </p>

            <p className={styles.description}>
              Our team collaborates remotely and works with clients near and
              far, but we might as well be sitting next to each other. Catch us
              on Instagram to see what we’re up to.
            </p>
            <p className={styles.linkinsta}>
              {" "}
              <Link href={"/about"}>
                <a>See what we’re up to</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
