import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./slider.css";
import "swiper/css/effect-creative";

type Props = {
  data: string[];
};
const Slider: FC<Props> = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((el) => (
        <SwiperSlide>
          <img src={el} alt="McDonalds" className="img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
