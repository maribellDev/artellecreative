import Image from "next/image";
import style from "../../styles/home.module.scss";
import mainstyle from "../../styles/mainscreen.module.scss";
import pricing from "../../styles/pricing.module.scss";
import Imagemain from "../../public/img/services/product-photos.jpg";
import Link from "next/link";

export function Firstscreen() {
  return (
    <>
      <section className={mainstyle.sectionAll}>
        <div id={mainstyle.block} className={mainstyle.blockmain}>
          <div style={{ maxWidth: "350px" }} className={mainstyle.textmain}>
            {/* <p className={pricing.packageprice}>Starting at $50/photo</p> */}
            <h1 style={{ fontSize: "32px" }}>Product Photos &amp; Videos</h1>
            <p>
              Show off your products with attractive images shot for e-commerce.
              Available only for small items that can be easily shipped.
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
