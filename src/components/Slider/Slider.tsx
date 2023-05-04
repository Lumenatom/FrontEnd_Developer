import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  Autoplay,
} from "swiper";
import ProjectMcDonalds1 from "../../assets/Projects/Project_1/Screenshot 2023-05-03 at 14.05.37.png";
import ProjectMcDonalds2 from "../../assets/Projects/Project_1/Screenshot 2023-05-03 at 14.06.18.png";
import "swiper/swiper-bundle.min.css";
import "./slider.css";
import "swiper/css/effect-creative";

const Slider: FC = () => {
  return (
    <Swiper
      modules={[
        Autoplay,
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCreative,
      ]}
      spaceBetween={50}
      slidesPerView={1}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={ProjectMcDonalds1} alt="McDonalds" className="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ProjectMcDonalds2} alt="McDonalds" className="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ProjectMcDonalds2} alt="McDonalds" className="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ProjectMcDonalds2} alt="McDonalds" className="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ProjectMcDonalds2} alt="McDonalds" className="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ProjectMcDonalds2} alt="McDonalds" className="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ProjectMcDonalds2} alt="McDonalds" className="img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
