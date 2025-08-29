
import style from "../styles/home.module.scss";
import styles from "../styles/aboutus.module.scss";

export function Aboutus() {
  return (
    <>
      <div className={styles.aboutinfo}>
        <h2>Who we are</h2>
        <div className={styles.aboutcards}>
          <div className={styles.aboutcardsright}>
            <div className={styles.aboutselftext}>
              <h2>Ana Shuda</h2>
              <p className={styles.profession}>Lead Designer</p>
              <p className={styles.description}>
              With over 10 years of experience designing for marketing, websites and branding, I’ve had the privilege of partnering with businesses in health & fitness, beauty, fashion & apparel, pet products, home decor and more.<br />
                <br /> I believe that design is a language — when done right, it helps brands earn trust and communicate with their customer base.<br />
                <br />To me, there’s nothing much more satisfying that seeing a brand put great care into how it presents itself—and that’s what I work for.

              </p>
            </div>
            <div style={{ width: "317px" }} className={style.aboutphoto}>
               <img
              src="/img/ana.jpg"
              alt="our team designer"
              className={style.image}
              width={317}
              height={406} 
      />
  
</div>
          </div>
          <div className={styles.aboutcardsleft}>
            <div style={{ width: "317px" }} className={style.aboutphoto}>
              <img src="/img/maria.jpg"
              
                className={style.image}
              width={317}
              height={406} 
                 alt="our team developer" />
            </div>
            <div className={styles.aboutselftext}>
              <h2>Maria</h2>
              <p className={styles.profession}>Lead Developer</p>
              <p className={styles.description}>
                As an experienced web developer, I tackle technical challenges and turn design mock-ups into smooth, reliable websites. Over the years, I’ve partnered with clients in healthcare, IT, ecommerce, real estate, and more, helping them build sites that are both user-friendly and technically solid <br />
                <br /> My goal is to create websites that not only work flawlessly but also help businesses grow and connect meaningfully with their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
