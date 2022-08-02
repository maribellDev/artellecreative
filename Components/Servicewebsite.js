import Link from "next/link";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import image1 from "../public/img/pricing/1-website.gif";
import image2 from "../public/img/pricing/2-branding.jpg";

export function Servicewebsite() {
  return (
    <>
      <div className={style.block}>
        <h2>Website &amp; Branding Packages</h2>
        <p className={style.text}>
          Whether it’s time for a rebrand or you’re starting out fresh, we make
          great design easy and uncomplicated with our Website and Branding
          Packages.
        </p>
        <div className={style.images}>
          <div className={style.imageright}>
            <Link href={"/pricing"}>
              <a>
                <div className={style.imsquare}>
                  <Image className={style.im} src={image1} alt="" />
                </div>
                <h3>Website Packages</h3>
                <p className={style.price}>Starting at $2,800</p>
              </a>
            </Link>
          </div>
          <div className={style.imageleft}>
            <Link href={"/pricing"}>
              <a>
                <div className={style.imsquare}>
                  <Image className={style.im} src={image2} alt="" />
                </div>
                <h3>Brand &amp; Logo Design Packages</h3>
                <p className={style.price}>Starting at $1,200</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
