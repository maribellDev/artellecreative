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
            Pricing can vary based on the number of photos, products, styled
            scenes and etc. Reach out to us for a quote.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            Where are you located?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We're located in Port St. Lucie, FL. We'll give you an exact address
            when you're ready to get started.
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
            After products are delivered to the studio, it can take anywhere
            from 1-3 weeks for shooting to be complete, depending on the number
            of images and styling.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl4">
            Do you provide models?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Hand models - yes!
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl5">
            Are props included?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Yes, we have a set of props on hand in our studio. If you need
            anything out of the ordinary or very specific, you can always send
            the props to us, along with your products.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl6">
            What kinds of videos can you shoot?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We can shoot simple gifs and studio videos for your products.
            Something like a fun quick gif for social media or a 360 view of
            your small product for a product page, but not an entire commercial.
          </div>
        </div>
      </div>
    </>
  );
}
