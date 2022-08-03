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
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            How will we stay organized?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            At the beginning of the project, we will set you up with a dedicated
            project board that will outline the timeline and outstanding tasks.
            The board allows for commenting and submitting feedback and is a
            great way to stay on the same page about everything that's happening
            with your project.
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
            We will need access to your website CMS, hosting, or any other
            accounts associated with your website.
          </div>
        </div>
      </div>
    </>
  );
}
