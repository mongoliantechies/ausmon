import React, { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "../../styles/swipe.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/bundle";
// import "swiper/css/autoplay";

const slideDataMon = require("../../DataMon/sliderData.json");
const slideDataEng = require("../../DataEng/sliderData.json");

export const Swipe = ({ language }) => {
  const swiperRef = useRef(null);

  return (
    <div
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <Swiper
        ref={useMemo(() => swiperRef, [swiperRef])}
        style={{ marginTop: "50px" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {(language === "mon" ? slideDataMon : slideDataEng || []).map(
          (slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="slide-text">
                  <h1>{slide.title.toUpperCase()}</h1>
                  <p>{slide.context}</p>
                  {/* <div
                    className={
                      slide.id === 894573
                        ? "donate-button"
                        : "donate-button-invisible"
                    }
                  >
                    <input type="button" value="DONATE" />
                  </div> */}
                </div>
                <img
                  // loading="lazy"
                  src={process.env.PUBLIC_URL + `/slider-images/${slide.image}`}
                  alt=""
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
