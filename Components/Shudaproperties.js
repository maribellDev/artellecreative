import Link from "next/link";
import Image from "next/image";
import Shudaprop from "../public/portfolio/shudaprop.jpg";
import style from "../styles/work.module.scss";
import styles from "../styles/home.module.scss";

export function Shudaproperties() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"../shuda-properties"}>
            <a>
              <p>SHUDA PROPERTIES</p>
              <h3>
                Crafting an online
                <br />
                presence for a small
                <br /> town rental venture.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.Imagework}>
          <Link href={"../shuda-properties"}>
            <a>
              <Image src={Shudaprop} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
