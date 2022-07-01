import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import slide1 from "../public/slider/1-branding-website-MG-920.jpg";
import slide2 from "../public/slider/2-product-photos-920.jpg";
import slide3 from "../public/slider/3-branding-website-design-920.jpg";
import slide4 from "../public/slider/4-email-design-920.jpg";
import slide5 from "../public/slider/5-branding-website-920.jpg";
import slide6 from "../public/slider/6-artelle-branding-920.jpg";
import styles from "../styles/slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.App}>
      <h2 style={{ margin: "0px auto", textAlign: "center", width: "85%" }}>
        Latest projects we worked on
      </h2>
      <p
        style={{
          fontSize: "14px",

          paddingBottom: "70px",
          textAlign: "center",
        }}
      >
        <Link href={"/work"}>
          <a>
            <span
              style={{ fontSize: "14px", borderBottom: "#2790d1 solid 1px" }}
            >
              See more
            </span>
          </a>
        </Link>
      </p>
      <div className={styles.carouselContainer}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#B6BAD7",
          }}
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            clickable: true,
            /* nextEl: ".swiperButtonPrev",
            prevEl: ".swiperButtonNext", */
          }}
          className={styles.mySwiper}
          loop={true}
          breakpoints={{
            1445: {
              spaceBetween: 140,
              slidesPerView: 2,
            },
            950: {
              spaceBetween: 140,
              slidesPerView: 2,
            },
            760: {
              spaceBetween: 90,
              slidesPerView: 1.5,
            },
            400: {
              spaceBetween: 20,
              slidesPerView: 1.1,
            },
          }}
        >
          <SwiperSlide>
            <Link href={"/shuda-properties"}>
              <a>
                {" "}
                <Image
                  className={styles.imageSlide}
                  class={styles.images}
                  src={slide1}
                  alt="slide1"
                />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/shuda-properties"}>
              <a>
                <Image src={slide2} className={styles.images} alt="slide2" />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/nomadtechy"}>
              <a>
                <Image src={slide3} className={styles.images} alt="slide3" />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/nomadtechy"}>
              <a>
                <Image src={slide4} className={styles.images} alt="slide4" />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/nomadtechy"}>
              <a>
                <Image src={slide5} className={styles.images} alt="slide5" />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/nomadtechy"}>
              <a>
                <Image src={slide6} className={styles.images} alt="slide6" />
              </a>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
