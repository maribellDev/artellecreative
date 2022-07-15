import Link from "next/link";
import style from "../../styles/reviews.module.scss";
import Image from "next/image";
import photo from "../../public/img/reviews/Venya.png";
import illustration from "../../public/img/reviews/img.png";

export default function Reviews() {
  return (
    <>
      <div className={style.container}>
        <div className={style.reviews}>
          <div className={style.blockrev}>
            <div className={style.illustration}>
              <Image src={illustration} alt="illustration"></Image>
            </div>

            <p className={style.text}>
              Thank you for building my website. It’s literally perfect! I am
              very happy with how my logo and business cards turned out as well.
            </p>
            <div className={style.client}>
              <div>
                <Image
                  className={style.photo}
                  src={photo}
                  alt="Good client"
                ></Image>
              </div>
              <div>
                <p className={style.textright}>
                  Ven S. <br /> Nomad Techy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
