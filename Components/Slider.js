import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "../styles/slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.App}>
      <h2 style={{ margin: "0 auto", textAlign: "center", width: "85%" }}>
        Our Work
      </h2>

      <p
        style={{
          fontSize: "14px",
          paddingBottom: "70px",
          textAlign: "center",
        }}
      >
        <Link href="/marketing-design">
          <span style={{ fontSize: "14px", borderBottom: "#2790d1 solid 1px" }}>
            See more
          </span>
        </Link>
      </p>

      <div className={styles.carouselContainer}>
        <Swiper
          style={{ "--swiper-navigation-color": "#B6BAD7" }}
          modules={[Autoplay, Navigation]}
          centeredSlides
          speed={1200}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          breakpoints={{
            2000: { spaceBetween: 140, slidesPerView: 3.5 },
            1445: { spaceBetween: 140, slidesPerView: 2 },
            950:  { spaceBetween: 90,  slidesPerView: 2 },
            760:  { spaceBetween: 40,  slidesPerView: 1.5 },
            400:  { spaceBetween: 30,  slidesPerView: 1.1 },
          }}
        >
          {[
            { href: "/work/broad-fit-financial/", src: "/slider/4slide.jpg", alt: "branding and website" },
            { href: "/work/aas-logistics/", src: "/slider/5slide.jpg", alt: "webdesign" },
            { href: "/work/ntc/", src: "/slider/6slide.jpg", alt: "shopify development" },
            { href: "/work/scuttlegov/", src: "/slider/1slide.jpg", alt: "wordpress development" },
            { href: "/work/nomadtechy/", src: "/slider/2slide.jpg", alt: "webdesign and branding" },
            { href: "/work/little-hunter/", src: "/slider/3slide.jpg", alt: "design website" },
          ].map((slide, i) => (
            <SwiperSlide key={i}>
              <Link href={slide.href}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={styles.images}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* стрелки */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* локальные стили стрелок */}
        <style jsx>{`
          .swiper-button-prev,
          .swiper-rtl .swiper-button-next {
            left: 22%;
            right: auto;
            color: #b6bad7;
          }

          .swiper-button-next,
          .swiper-rtl .swiper-button-prev {
            right: 22%;
            left: auto;
            color: #b6bad7;
          }

          @media (max-width: 950px) {
            .swiper-button-prev { left: 12%; }
            .swiper-button-next { right: 12%; }
          }

          @media (max-width: 759px) {
            .swiper-button-prev,
            .swiper-button-next { display: none; }
          }

          @media (min-width: 2000px) {
            .swiper-button-prev { left: 34%; }
            .swiper-button-next { right: 34%; }
          }
        `}</style>
      </div>
    </div>
  );
}
