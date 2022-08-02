import Image from "next/image";
import style from "../../styles/howitwork.module.scss";
import image from "../../public/img/howitwork.gif";

export function Howitworks() {
  return (
    <>
      <div className={style.container}>
        <div className={style.howitworks}>
          <div className={style.imghow}>
            <Image src={image} alt={"how it works"} />
          </div>
          <div className={style.texthow}>
            <h2>How it works</h2>
            <div>
              <div className={style.before}>
                <div className={style.number}>01</div>
                <h3>Initial chat and brief</h3>
                <p>
                  We meet for a quick chat about what you're looking for and how
                  we can help. You send us an existing brief or we make one
                  together.
                </p>
              </div>
            </div>
            <div>
              <div className={style.before}>
                <div className={style.number}>02</div>
                <h3>Design</h3>
                <p>
                  We design the assets and submit them for your feedback and
                  approval.
                </p>
              </div>

              <div className={style.before}>
                <div className={style.number}>03</div>
                <h3>Final files sent</h3>
                <p>
                  We deliver all final files to you via a link. Print files will
                  be ready for print, and digital files will be optimized for
                  the internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
