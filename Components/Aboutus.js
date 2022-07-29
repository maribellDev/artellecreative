import Image from "next/image";
import style from "../styles/home.module.scss";
import styles from "../styles/aboutus.module.scss";
import maria from "../public/img/maria.jpg";
import ana from "../public/img/ana.jpg";

export function Aboutus() {
  return (
    <>
      <div className={styles.aboutinfo}>
        <h2>Who we are</h2>
        <div className={styles.aboutcards}>
          <div className={styles.aboutcardsright}>
            <div className={styles.aboutselftext}>
              <h2>Ana Shuda</h2>
              <p className={styles.profession}>Lead Designer</p>
              <p className={styles.description}>
                With over six years of designing for e-commerce, IT, and real
                estate brands, Ana incorporates liveliness and delight into her
                work, striking a balance between purpose-driven design and
                playful appeal.
                <br />
                <br /> Ana is both the lead designer and the self-proclaimed
                “introverted people-person” behind Artelle Creative - and you
                can expect to work with her throughout the entire design
                process.
                <br />
                <br /> During her free time, she spends time outdoors and uses
                her experiences as creative fuel for her work. She enjoys
                documenting her adventures and sharing them with the world.
              </p>
            </div>
            <div style={{ width: "317px" }} className={style.aboutphoto}>
              <Image src={ana} className={style.aboutphoto} alt="designer" />
            </div>
          </div>
          <div className={styles.aboutcardsleft}>
            <div style={{ width: "317px" }} className={style.aboutphoto}>
              <Image src={maria} alt="developer" />
            </div>
            <div className={styles.aboutselftext}>
              <h2>Maria Bel</h2>
              <p className={styles.profession}>Lead Developer</p>
              <p className={styles.description}>
                Maria is an experienced web developer with a knack for solving
                technical problems. She has worked with clients in health and
                wellness, cosmetology, IT and other fields. <br />
                <br /> Outside of development, she enjoys reading books and
                teaching her oldest son coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
