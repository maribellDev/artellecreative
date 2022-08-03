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
            How will we stay organized?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            At the beginning of the project, we will set you up with a dedicated
            project board that will outline the timeline and outstanding tasks.
            The board allows for commenting and submitting feedback and is a
            great way to stay on the same page about everything that's happening
            with your project.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            What if I need something not covered in the packages?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Talk to us. Depending on what you need, we can make a custom package
            just for you.
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
            What's the typical timeline?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            It typically takes 6-10 weeks for a project to be completed,
            depending on the package selected.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl4">
            What should I have prepared before we begin the project?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            This is something we will walk you through during our initial call.
            Typically it includes any branding assets you might have,
            photography, and content. In addition, there will be an extensive
            guided questionnaire that will outline any and all information we
            might need.
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
