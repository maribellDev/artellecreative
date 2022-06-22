import Link from "next/link";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import image1 from "../public/img/img.png";

export function Servicedesign() {
  return (
    <>
      <div className={style.block}>
        <h2>Ongoing Design & Website Support</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
        <div className={style.images}>
          <div className={style.imageright}>
            <Link href={"/pricing"}>
              <a>
                <Image src={image1} alt="" />
                <h3>Design Retainer</h3>
                <p className={style.price}>Starting at $2,800</p>
              </a>
            </Link>
          </div>
          <div className={style.imageleft}>
            <Link href={"/pricing"}>
              <a>
                <Image src={image1} alt="" />
                <h3>Website Maintanence</h3>
                <p className={style.price}>Starting at $2,800</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
