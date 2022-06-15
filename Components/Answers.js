import style from "../styles/answers.module.scss";

export function Answers() {
  return (
    <>
      <div className={style.answersall}>
        <h2
          style={{ margin: "0 0 10px 0", paddingTop: "80px", color: "white" }}
        >
          Interested in working together?
        </h2>
        <p
          style={{
            lineHeight: "24px",
            fontSize: "16px",
            textAlign: "center",
            paddingBottom: "50px",
            color: "white",
          }}
        >
          Learn more about our process and reach out <br /> if you think we’d be
          a good fit.
        </p>
        <div className={style.horizontalclick}>
          <input type="radio" name="vkl" id="vkl1" />
          <label style={{ color: "white" }} htmlFor="vkl1">
            How do we get started?
          </label>
          <div style={{ maxWidth: "85%", color: "#C6CAE5" }}>
            Let’s start off by&nbsp;
            <a href="/contact" style={{ textDecoration: "underline" }}>
              scheduling a call
            </a>
            &nbsp;to talk about your needs and see if we are a good fit.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "white" }} htmlFor="vkl2">
            How much do projects usually cost?
          </label>
          <div style={{ maxWidth: "85%", color: "#C6CAE5" }}>
            Project cost depends on project complexity and functionality. Please
            reach out to us, and we can walk you through everything needed to
            prepare an estimate. The first discovery call is completely free and
            is a means for us to get to know each other.
          </div>

          <input
            className={style.shortLabel}
            type="radio"
            name="vkl"
            id="vkl3"
          />
          <label
            style={{ color: "white" }}
            className={style.shortLabel}
            htmlFor="vkl3"
          >
            What information do you need
            <br /> to prepare an estimate?
          </label>
          <div style={{ maxWidth: "85%", color: "#C6CAE5" }}>
            Our work and processes are dependent on the unique needs of each
            company, so we’d always suggest getting in touch first, and we can
            talk you through what we need in more detail.
            <br />
            <br />
            During our first call, we’ll talk about your company, needs, and
            goals. After which we would provide you with a proposal and a cost
            estimate.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "white" }} htmlFor="vkl4">
            What is your approach?
          </label>
          <div style={{ maxWidth: "85%", color: "#C6CAE5" }}>
            We approach every website project with the same four-phase
            process—research, strategy, design, and development. These phases
            help us keep each project on track, on time, and on budget. Read
            more about our approach and process&nbsp;
            <a
              href="/our-approach-to-website-projects"
              style={{ textDecoration: "underline" }}
            >
              here
            </a>
            .
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "white" }} htmlFor="vkl5">
            How long do projects take?
          </label>
          <div style={{ maxWidth: "85%", color: "#C6CAE5" }}>
            Each project is different and the timeline depends on the complexity
            of each given website. Most of our projects take 6 to 10 weeks,
            though there are cases when it takes less or more time.
            <br />
            <br />
            If you have a time constraint that requires the launch to be earlier
            than 6 weeks, talk to us. In most cases, we can create a timeline to
            complete your site in a shorter timeframe.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "white" }} htmlFor="vkl6">
            Who is Artelle Creative?
          </label>
          <div style={{ maxWidth: "85%", color: "#C6CAE5" }}>
            We are a group of creatives working remotely from different corners
            of the world, with our main base in Port St. Lucie, Florida. We have
            extensive experience in design, development, user experience,
            content creation, copywriting and virtually anything needed to craft
            websites that work for the companies we work with.
          </div>
        </div>
      </div>
    </>
  );
}
