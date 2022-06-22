import Image from "next/image";
import style from "../styles/home.module.scss";
import styles from "../styles/aboutus.module.scss";
import maria from "../public/img/maria.png";
import ana from "../public/img/ana.png";

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
                Choosing the right design agency is difficult. We want to make
                it as easy as possible by not keeping our pricing a secret. No
                matter the size or revenue of your business, our pricing stays
                the same.
              </p>
            </div>
            <Image src={ana} className={style.aboutphoto} alt="designer" />
          </div>
          <div className={styles.aboutcardsleft}>
            <Image src={maria} alt="developer" />

            <div className={styles.aboutselftext}>
              <h2>Maria Bel</h2>
              <p className={styles.profession}>Lead Developer</p>
              <p className={styles.description}>
                Choosing the right design agency is difficult. We want to make
                it as easy as possible by not keeping our pricing a secret. No
                matter the size or revenue of your business, our pricing stays
                the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
