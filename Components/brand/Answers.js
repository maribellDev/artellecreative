import style from "../../styles/answers.module.scss";

export function Answers() {
  return (
    <>
      <div className={style.answersall}>
        <h2
          style={{ margin: "0 0 10px 0", paddingTop: "80px", color: "#2E303D" }}
        >
          Interested in working together?
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
            What if I also need a website?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Take a look at our New Business package that includes everything in
            Brand &amp; Logo Design Packages, as well as the Website Design
            Packages.
          </div>

          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl4">
            How many rounds of edits do I get?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We design and develop in stages, and at each stage, you will be able
            to send your edits and feedback. The process is reiterative and
            because of it, there's an unlimited amount of edits you can request.
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl5">
            How much will my e-commerce branding project cost?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Because there are many factors that vary one company to another,
            like the amount of products, type of product photos, types of email
            templates and more, we encourage you to reach out to us so we can
            build a custom pricing package based on your needs.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl6">
            Overall, what is expected of me as a client?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            A project like website design or branding can be a significant time
            investment on both sides. So we ask you to be available for edits,
            revisions, feedback, and any needed Zoom meeting in between. Timely
            collaboration, where both parties are invested, brings the best
            results in our experience.
          </div>
        </div>
      </div>
    </>
  );
}
