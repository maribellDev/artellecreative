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
                <h3>Email Outline &amp; Direction</h3>
                <p>
                  You send us an email outline (or a general email theme if it’s
                  a template) along with any assets, and brand guidelines and we
                  take it from there.
                </p>
              </div>
            </div>
            <div>
              <div className={style.before}>
                <div className={style.number}>02</div>
                <h3>Design &amp; Copywriting</h3>
                <p>
                  We design the email and write the required copy (if needed).
                  After which we submit it for your approval and make any edits
                  as needed.
                </p>
              </div>

              <div className={style.before}>
                <div className={style.number}>03</div>
                <h3>Asset Handoff</h3>
                <p>
                  Depending on your requirements, we either send you image
                  “slices” of the emails to be upload into any drag-and-drop
                  email builder, an editable template built in Klaviyo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
