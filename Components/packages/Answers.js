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
            How do we get started?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            The fastest way to get started is to contact us through the inquiry
            form and we will contact you with the next steps.
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
            What information do you need from me?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Once we get started on your website, we will send out a
            questionnaire that will cover most of the needed information. In
            addition, we will request any logo files, brand guidelines, or
            imagery that you might have available.
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl5">
            What if I have other questions?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Reach out to us! Ana will be happy to answer any questions you might
            have.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl6">
            What if I also need logo &amp; brand design?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Good news! We developed separate packages just for you. Head over to
            New Business Packages and take a look at our packages that include a
            complete design system for your (new or existing) business including
            - logo &amp; brand design, website design, marketing materials
            design, design for social media, and more.
          </div>
        </div>
      </div>
    </>
  );
}
