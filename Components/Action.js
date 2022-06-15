import style from "../styles/home.module.scss";
import Link from "next/link";

export default function Action() {
  return (
    <>
      <h2 className={style.haction}>
        Let’s build things <br /> together.
      </h2>
      <div style={{ padding: "0", textAlign: "center" }}>
        <Link href={"/contact"}>
          <a style={{ paddingRight: "0px" }}>
            {" "}
            <button className={style.dark}>Get Started </button>
          </a>
        </Link>
      </div>
    </>
  );
}
