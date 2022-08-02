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
            16 hours/month or 4 hours/week - $720
            <br />
            40 hours/month or 10 hours/week - $1,800
            <br />
            Unlimited designs/month - $4,200
            <br />
            Want on-demand designer access?
            <br />
            $50/month + $55/hour
            <br />
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            How will we stay organized?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            At the beginning of our collaboration, we will set you up with a
            dedicated project board. The board allows for adding tasks, file
            sharing, commenting, and submitting feedback and is a great way to
            stay on the same page about all tasks being worked on.
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
            We already have our own task management tool, can we use ours?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            No worries, if you have a preferred task management tool that your
            team uses - we can always use yours.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl4">
            We already have our own task management tool, can we use ours?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            No worries, if you have a preferred task management tool that your
            team uses - we can always use yours.
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl5">
            Can you edit my website or design assets for my clients?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            No, this package only includes stand-alone digital or printed
            materials for email, social media, and print. We can also design
            graphics for your website, like article images, or banners and
            headers - but not any structural or layout changes to your website.
            And we will only design for you, not for your clients.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl6">
            Who keeps the source files?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            If needed for later editing, we can provide the source files.
          </div>
        </div>
      </div>
    </>
  );
}
