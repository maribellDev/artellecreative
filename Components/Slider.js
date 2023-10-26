

import  { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import '../styles/slider.module.scss';

import Image from "next/image";
import slide1 from "../public/slider/4slide.jpg";
import slide2 from "../public/slider/5slide.jpg";
import slide3 from "../public/slider/6slide.jpg";
import slide4 from "../public/slider/1slide.jpg";
import slide5 from "../public/slider/2slide.jpg";
import slide6 from "../public/slider/3slide.jpg";
import styles from "../styles/slider.module.scss";

export default function Slider() {
 
  return (
    <div className={styles.App}>
      <h2 style={{ margin: "0px auto", textAlign: "center", width: "85%" }}>
        Our Work
      </h2>
      <p
        style={{
          fontSize: "14px",
          paddingBottom: "70px",
          textAlign: "center",
        }}
      >
        <Link href={"/marketing-design"}>
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
          modules={[ Autoplay, Navigation]}
          centeredSlides={true}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          
          }}
          navigation= {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className={styles.mySwiper}
          loop={true}
          breakpoints={{
            2000:{
              spaceBetween: 140,
              slidesPerView: 3.5,
            
            },
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
          <Link href={"/work/broad-fit-financial/"}><Image className={styles.images} src={slide1} alt="slide1" /></Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href={"/work/aas-logistics/"}><Image src={slide2} className={styles.images} alt="slide2" /></Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href={"/work/ntc/"}><Image src={slide3} className={styles.images} alt="slide3" /></Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href={"/work/scuttlegov/"}><Image src={slide4} className={styles.images} alt="slide4" /></Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href={"/work/nomadtechy/"}><Image src={slide5} className={styles.images} alt="slide5" /></Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href={"/work/little-hunter/"}><Image src={slide6} className={styles.images} alt="slide6" /></Link>
          </SwiperSlide>
        </Swiper>
        <style jsx>{`

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
 left: 22%;
 right: auto;
 color:#B6BAD7;

}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
 right: 22%;
 left: auto;
 color:#B6BAD7;

}

@media (max-width: 950px) {
.swiper-button-prev {
left: 12%;}
 .swiper-button-next {
 right: 12%;
 }
}
@media (max-width: 759px) {
 .swiper-button-prev,
.swiper-button-next {
 display: none;
 }

}
@media (min-width: 2000px) {
  .swiper-button-prev {
  left: 34%;
  }

   .swiper-button-next {
   right: 34%;
  
   }
  }
`}</style>
        <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

