import style from "../styles/answers.module.scss";

export function Answers() {
  return (
    <>
      <div className={style.answersall}>
        <h2
          style={{ margin: "0 0 10px 0", paddingTop: "80px", color: "#2E303D" }}
        >
          What people ask
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
            Do you offer design packages?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We sure do! We have our&nbsp;
            <a
              href="/services/website-packages/"
              style={{ textDecoration: "underline" }}
            >
              Website
            </a>
            ,{" "}
            <a
              href="/services/brand-logo-design-packages/"
              style={{ textDecoration: "underline" }}
            >
              Branding
            </a>
            , and{" "}
            <a
              href="/services/new-business-packages/"
              style={{ textDecoration: "underline" }}
            >
              New Business Packages
            </a>{" "}
            that combine both. Along with transparent pricing for all. All are
            covered in detail on each of the respective pages.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl2">
            Do you offer ongoing design or <br />
            website retainers?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Yes, we do. See more info on design retainers{" "}
            <a
              href="/services/design-retainer/"
              style={{ textDecoration: "underline" }}
            >
              here.
            </a>
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
            How long do projects take?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            It depends on what kind of project we're working on. Websites take
            4-6 weeks, branding 2-4 weeks, marketing materials can take 1-3
            weeks. If you need a fast turnaround (2-3 days) on marketing
            materials for social media, email, or anything else, our design
            retainer might be for you.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl4">
            What's your pricing?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Had over to our Services and Pricing page for a quick overview of
            our services and pricing and take a look at our packages for
            specific pricing on packages. If your needs are more a la carte,
            reach out to us.
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl5">
            Do you have a guarantee?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We want our clients to be happy with the work we've done for them
            and offer unlimited edits on all of our work as a guarantee.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl6">
            Who is Artelle Creative?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            We are a lean creative studio based in Port St. Lucie, FL
            specializing in design and development. Learn more about us{" "}
            <a href="/about/" style={{ textDecoration: "underline" }}>
              here.
            </a>
          </div>
          <input type="radio" name="vkl" id="vkl7" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl7">
            How can we get started?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Glad you asked! Head over{" "}
            <a href="/contact/" style={{ textDecoration: "underline" }}>
              here
            </a>{" "}
            and choose your journey.
          </div>
          <input type="radio" name="vkl" id="vkl8" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl8">
            What companies do you work with?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            Because we offer a range of creative services, we've had the
            opportunity to work with many businesses of different sizes and
            industries. Ecommerce companies typically come to us for email
            design and product photography, while our website and branding
            packages are mostly geared toward small and medium-sized businesses
            from all industries.
          </div>
          <input type="radio" name="vkl" id="vkl9" />
          <label style={{ color: "#2E303D" }} htmlFor="vkl9">
            What does the process look like?
          </label>
          <div style={{ maxWidth: "85%", color: "#2E303D" }}>
            The process might look different for different projects. Learn more
            about our process on each of our Service pages. But generally, after
            you reach out to us, we schedule an initial call to talk about your
            needs and walk you through any next steps.
          </div>
        </div>
      </div>
    </>
  );
}
