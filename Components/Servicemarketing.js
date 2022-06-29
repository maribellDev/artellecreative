import Link from "next/link";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import image1 from "../public/img/pricing/7-email-design.jpg";
import image2 from "../public/img/pricing/8-digital-print-materials.jpg";

export function Servicemarketing() {
  return (
    <>
      <div className={style.block}>
        <h2>Marketing Collateral</h2>
        <p className={style.text}>
          Ad design, email design, newsletters, direct mail, social media assets
          and sales collateral.
        </p>
        <div className={style.images}>
          <div className={style.imageright}>
            <Link href={"/pricing"}>
              <a>
                <Image className={style.im} src={image1} alt="" />
                <h3>Email Design</h3>
                <p className={style.price}>Starting at $2,800</p>
              </a>
            </Link>
          </div>
          <div className={style.imageleft}>
            <Link href={"/pricing"}>
              <a>
                <Image className={style.im} src={image2} alt="" />
                <h3>Digital & Print Materials</h3>
                <p className={style.price}>Starting at $2,800</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
