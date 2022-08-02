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
                <h3>Initial call</h3>
                <p>
                  We collect all the needed info, talk about timelines and see
                  if we're a good fit.
                </p>
              </div>
            </div>
            <div>
              <div className={style.before}>
                <div className={style.number}>02</div>
                <h3>Development</h3>
                <p>
                  We develop the website from existing design mockups and
                  connect all the needed functionalities.
                </p>
              </div>

              <div className={style.before}>
                <div className={style.number}>03</div>
                <h3>Handoff</h3>
                <p>
                  We deliver the final website and walk you through the final
                  setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
