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
                With nearly a decade of experience designing for e-commerce and
                traditional brands, I use design to help companies stand out and
                optimize their websites, branding, and marketing. <br />
                <br /> Early in my career, I joined a creative studio and worked
                with clients in the health and wellness industry, later moving
                on to work for an e-commerce company as part of the in-house
                design and marketing team. Eventually, taking the leap to start
                Artelle Creative and partner with fantastic companies near and
                far. <br />
                <br /> During my free time, I enjoy spending time outdoors and
                use my hobbies as creative fuel for my work.
              </p>
            </div>
            <div style={{ width: "317px" }} className={style.aboutphoto}>
              <Image src={ana} className={style.aboutphoto} alt="our team designer" />
            </div>
          </div>
          <div className={styles.aboutcardsleft}>
            <div style={{ width: "317px" }} className={style.aboutphoto}>
              <Image src={maria} alt="our team developer" />
            </div>
            <div className={styles.aboutselftext}>
              <h2>Maria</h2>
              <p className={styles.profession}>Lead Developer</p>
              <p className={styles.description}>
                Being an experienced web developer with a knack for solving
                technical problems, I’ve worked with clients in medical fields,
                IT, real estate and other professional industries. <br />
                <br /> Outside of development, I enjoy travelling, reading books
                and teaching my son coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
