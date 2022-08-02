import style from "../../styles/answers.module.scss";

export function Answers() {
  return (
    <>
      <div className={style.answersall}>
        <h2
          style={{ margin: "0 0 10px 0", paddingTop: "80px", color: "#2E303D" }}
        >
          FAQ
        </h2>
        <p
          style={{
            lineHeight: "24px",
            fontSize: "16px",
            textAlign: "center",
            paddingBottom: "50px",
            color: "#2E303D",
          }}
        >
          Learn more about our process and reach out <br /> if you think we’d be
          a good fit.
        </p>
        <div className={style.horizontalclick}>
          <input type="radio" name="vkl" id="vkl1" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl1">
            What's your pricing?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Design materials start at $250 and depend on the number of pages and
            asset type. Reach out to us for pricing.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            What's the typical timeline?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            It depends on the asset, but the process typically takes 1-3 weeks.
          </div>

          <input
            className={style.shortLabel}
            type="radio"
            name="vkl"
            id="vkl3"
          />
          <label
            style={{ color: "#2E303D" }}
            className={style.shortLabel}
            htmlFor="vkl3"
          >
            How many rounds of edits do I get?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We edit until you're happy with the design.
          </div>
        </div>
      </div>
    </>
  );
}
