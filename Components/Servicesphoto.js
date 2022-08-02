import Link from "next/link";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import image1 from "../public/img/pricing/9-product-photography.jpg";
import image2 from "../public/img/pricing/10-video.gif";

export function Servicephoto() {
  return (
    <>
      <div className={style.block}>
        <h2>Product Photography & Video</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
        <div className={style.images}>
          <div className={style.imageright}>
            <Link href={"/pricing"}>
              <a>
                <div className={style.imsquare}>
                  <Image className={style.im} src={image1} alt="" />
                </div>
                <h3>Product Photography</h3>
                <p className={style.price}>Starting at $50</p>
              </a>
            </Link>
          </div>
          <div className={style.imageleft}>
            <Link href={"/pricing"}>
              <a>
                <div className={style.imsquare}>
                  <Image className={style.im} src={image2} alt="" />
                </div>
                <h3>Video</h3>
                <p className={style.price}>Starting at $100</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
