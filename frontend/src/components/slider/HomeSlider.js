import React, { useEffect, useState } from "react";
const slideDataMon = require("../../DataMon/sliderData.json");
const slideDataEng = require("../../DataEng/sliderData.json");

export const HomeSlider = ({ language }) => {
  const data = language === "mon" ? slideDataMon : slideDataEng;
  const [slideIndex, setSlideIndex] = useState(0);
  const prevButton = () => {
    if (slideIndex < 1) {
      setSlideIndex(3);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const nextButton = () => {
    if (slideIndex > 2) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide w-75 mx-auto"
      dataBsTouch="false"
      dataBsInterval="false"
    >
      <div className="carousel-inner position-relative">
        {(data || []).map((slide, index) => {
          return (
            <div
              className={
                "w-100 carousel-item " +
                `${slideIndex === index ? "active" : ""}`
              }
              style={{
                backgroundImage: `url("./slider-images/${slide.image}")`,
                backgroundRepeat: "round",
                height: "400px",
              }}
            >
              <div className="w-100 d-block text-center text-white top-50 start-50 position-absolute translate-middle">
                <h1 className="fs-2 text-uppercase">{slide.title}</h1>
                <p>{slide.context}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev my-auto"
        type="button"
        dataBsTarget="#carouselExampleControlsNoTouching"
        dataBsSlide="prev"
        onClick={prevButton}
      >
        <span className="carousel-control-prev-icon" ariaHidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next my-auto"
        type="button"
        dataBsTarget="#carouselExampleControlsNoTouching"
        dataBsSlide="next"
        onClick={nextButton}
      >
        <span className="carousel-control-next-icon" ariaHidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
