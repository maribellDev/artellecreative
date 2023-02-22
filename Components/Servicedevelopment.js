import Link from "next/link";
import Image from "next/image";
import style from "../styles/pricing.module.scss";
import image1 from "../public/img/pricing/4-maintenance.jpg";
import image2 from "../public/img/pricing/5-web-development.gif";

export function Servicedevelopment() {
  return (
    <>
      <div className={style.block}>
        <h2>Web Development</h2>
        <p className={style.text}>
          Hourly or flat rate website editing, maintanence, and monitoring and
          website development from existing design files.
        </p>
        <div className={style.images}>
          <div className={style.imageright}>
            <Link href={"/services/website-maintanence/"}>
              <a>
                <div className={style.imsquare}>
                  <Image src={image1} alt="" />
                </div>
                <h3>Website Support</h3>
                <p className={style.price}>Starting at $300</p>
              </a>
            </Link>
          </div>
          <div className={style.imageleft}>
            <Link href={"/services/web-development/"}>
              <a>
                <div className={style.imsquare}>
                  <Image src={image2} alt="" />
                </div>
                <h3>Web Development</h3>
                <p className={style.price}>Reach out for pricing</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
