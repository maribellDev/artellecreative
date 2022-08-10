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
                <h3>Initial meeting</h3>
                <p>
                  We meet for a quick chat about what you're looking for and how
                  we can help.
                </p>
              </div>
            </div>
            <div>
              <div className={style.before}>
                <div className={style.number}>02</div>
                <h3>Ongoing requests</h3>
                <p>
                  All requests go into a task management board, along with all
                  assets and comments.
                </p>
              </div>

              <div className={style.before}>
                <div className={style.number}>03</div>
                <h3>Revisions &amp; Delivery</h3>
                <p>
                  All requests have unlimited changes. We work until you're
                  fully happy, and you receive the files via the task board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
