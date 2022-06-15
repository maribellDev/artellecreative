import Link from "next/link";
import Image from "next/image";
import Nomadtechy from "../public/portfolio/nomadtechy.jpg";
import style from "../styles/work.module.scss";
import styles from "../styles/home.module.scss";

export function Nomad() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"../nomadtechy"}>
            <a>
              <p>NOMAD TECHY</p>
              <h3>
                Building a website that
                <br /> attracts IT clients.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.Imagework}>
          <Link href={"../nomadtechy"}>
            <a>
              <Image src={Nomadtechy} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
