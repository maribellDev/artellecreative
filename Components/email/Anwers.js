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
            What's your pricing for email design?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Depending on whether you need a single email template or ongoing
            email design, we can work on specific pricing for what you need.
            Generally, prices for HTML-based email templates are between $150 -
            $200 per email and image-based emails start at $100.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            What's the difference between image-based emails and
            <br /> editable templates?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Image-based emails are made up completely of images. All the text
            and all the graphics are part of JPG images, making the email
            editable ONLY within Photoshop. While editable templates are
            completely editable within your platform but don't provide the same
            flexibility as image-based.
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
            Why choose image-based emails vs. editable templates?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Image-based emails provide greater flexibility when it comes to
            design - fancy fonts, and layouts are all possible with images, and
            look great across all screen sizes and email inboxes. With
            templates, fonts will be very limited and fun layouts might not be
            possible at all.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl4">
            Why choose editable templates?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Templates can be easily edited, including text and images. And they
            perform better in email clients that don't automatically render
            images.
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl5">
            Will your emails work with my email marketing platform?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Image-based emails are made up of images that can be uploaded to
            absolutely any drag-and-drop platform. If you need an Email Template
            - those templates are only available within Klaviyo at the moment.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl6">
            Do you offer ongoing email design discounts?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Yes! Talk to us.
          </div>
          <input type="radio" name="vkl" id="vkl7" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl7">
            How do we get started?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Just fill out the inquiry form and we'll be in touch.
          </div>
        </div>
      </div>
    </>
  );
}
