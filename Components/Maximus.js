import Link from "next/link";
import Image from "next/image";
import Microgreen from "../public/portfolio/maximusmg.jpg";
import style from "../styles/work.module.scss";
import styles from "../styles/home.module.scss";

export function Maximus() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"../maximus-microgreens"}>
            <a>
              <p>MAXIMUS MICROGREENS</p>
              <h3>
                Helping a brand <br /> promote healthy living.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.Imagework}>
          <Link href={"../maximus-microgreens"}>
            <a>
              <Image src={Microgreen} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
