import Link from "next/link";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import image1 from "../public/img/img.png";

export function Serviceblock() {
  return (
    <>
      <div className={style.block}>
        <h2>Website & Branding Packages</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
        <div className={style.images}>
          <div className={style.imageright}>
            <Image src={image1} alt="" />
            <h3>Website Packages</h3>
            <p className={style.price}>Starting at $2,800</p>
          </div>
          <div className={style.imageleft}>
            <Image src={image1} alt="" />
            <h3>Branding Packages</h3>
            <p className={style.price}>Starting at $2,800</p>
          </div>
        </div>
      </div>
    </>
  );
}
