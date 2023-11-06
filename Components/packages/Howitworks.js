import Image from "next/image";
import style from "../../styles/howitwork.module.scss";
import image from "../../public/img/howitwork.gif";

export function Howitworks() {
  return (
    <>
      <div className={style.container}>
        <div className={style.howitworks}>
          <div className={style.imghow}>
            <Image src={image} alt="how it works" />
          </div>
          <div className={style.texthow}>
            <h2>How it works</h2>
            <div>
              <div className={style.before}>
                <div className={style.number}>01</div>
                <h3>Brief &amp; Strategy</h3>
                <p>
                  We start with a custom questionnaire to learn about your
                  business and goals, and develop a content plan and structure
                  for your website.
                </p>
              </div>
            </div>
            <div>
              <div className={style.before}>
                <div className={style.number}>02</div>
                <h3>Design &amp; Development</h3>
                <p>
                  With your feedback, we design all the pages and build out the
                  website with the needed functionality to get it ready for
                  launch.
                </p>
              </div>

              <div className={style.before}>
                <div className={style.number}>03</div>
                <h3>Post-Launch Training &amp; Support</h3>
                <p>
                  Post-launch we will walk you through everything you need to
                  know about your new website and monitor the site’s performance
                  for a set number of days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
