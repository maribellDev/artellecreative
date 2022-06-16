import style from "../styles/home.module.scss";
import Link from "next/link";
import styles from "../styles/action.module.scss";

export default function Action() {
  return (
    <>
      <div className={styles.action}>
        <h2 className={style.haction}>
          Let’s build things <br /> together.
        </h2>
        <div style={{ padding: "0", textAlign: "center" }}>
          <Link href={"/contact"}>
            <a style={{ paddingRight: "0px" }}>
              <button className={style.black}>Get Started </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
