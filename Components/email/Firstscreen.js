import Image from "next/image";
import style from "../../styles/home.module.scss";
import mainstyle from "../../styles/mainscreen.module.scss";
import pricing from "../../styles/pricing.module.scss";
import Imagemain from "../../public/img/services/email-design.jpg";
import Link from "next/link";

export function Firstscreen() {
  return (
    <>
      <section className={mainstyle.sectionAll}>
        <div id={mainstyle.block} className={mainstyle.blockmain}>
          <div style={{ maxWidth: "350px" }} className={mainstyle.textmain}>
            <p className={pricing.packageprice}>Starting at $150/email</p>
            <h1 style={{ fontSize: "32px" }}>Email Design</h1>
            <p>
              Send on-brand, beautifully designed, conversion-optimized
              marketing emails. Contact for specific pricing.
            </p>

            <Link href="/contact">
              <a>
                <button className={style.dark}>Get Started </button>
              </a>
            </Link>
          </div>
          <div className={mainstyle.imagemain}>
            <Image src={Imagemain} alt="crafting websites" />
          </div>
        </div>
      </section>
    </>
  );
}
