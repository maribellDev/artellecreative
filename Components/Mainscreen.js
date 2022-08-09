import Image from "next/image";
import style from "../styles/home.module.scss";
import mainstyle from "../styles/mainscreen.module.scss";
import Imagemain from "../public/img/mainimage.png";
import { Animation } from "./Animation";
import Link from "next/link";

export function Mainscreen() {
  return (
    <>
      <section className={mainstyle.sectionAll}>
        <div className={mainstyle.blockmain}>
          <div className={mainstyle.textmain}>
            <Animation />
            <p>
              Artelle Creative is a creative design &amp; development
              <br />
              studio based in Port St. Lucie, Florida.
            </p>

            <Link href="/contact">
              <a>
                <button className={style.dark}>Get Started </button>
              </a>
            </Link>
          </div>
          <div className={mainstyle.Imagemain}>
            <Image src={Imagemain} alt="crafting websites" />
          </div>
        </div>
      </section>
    </>
  );
}
