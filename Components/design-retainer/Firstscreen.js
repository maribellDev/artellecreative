import Image from "next/image";
import style from "../../styles/home.module.scss";
import mainstyle from "../../styles/mainscreen.module.scss";
import pricing from "../../styles/pricing.module.scss";
import Imagemain from "../../public/img/services/design-retainer.jpg";
import Link from "next/link";

export function Firstscreen() {
  return (
    <>
      <section className={mainstyle.sectionAll}>
        <div id={mainstyle.block} className={mainstyle.blockmain}>
          <div style={{ maxWidth: "350px" }} className={mainstyle.textmain}>
            <p className={pricing.packageprice}>Starting at $720/month</p>
            <h1 style={{ fontSize: "32px" }}>Ongoing Design Support</h1>
            <p>
              Design for ongoing marketing needs. Whether you have sporadic
              design needs or simply need an extra set of hands (and brains),
              our design retainer provides the support of a Senior Designer for
              a fraction of the cost.
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
