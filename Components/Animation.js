import styles from "../styles/animation.module.scss";

export function Animation() {
  return (
    <>
      <section className={styles.rwWrapper}>
        <h1 className={styles.rwSentence}>
          <span className={styles.span}>Creative studio</span>
          <br />
          <div className={styles.rwWords}>
            <span className={styles.spanWord1}>crafting websites</span>
            <span className={styles.spanWord2}>designing logos</span>
            <span className={styles.spanWord3}>laying out emails</span>
          </div>
          <br />
        </h1>
      </section>
    </>
  );
}
