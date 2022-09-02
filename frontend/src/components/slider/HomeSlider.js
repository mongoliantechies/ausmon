import React, { useCallback } from "react";
const slideDataMon = require("../../DataMon/sliderData.json");
const slideDataEng = require("../../DataEng/sliderData.json");

export const HomeSlider = ({ language }) => {
  const data = language === "mon" ? slideDataMon : slideDataEng;
  let slideIndex = 0;

  const load = useCallback(() => {
    return (
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }, []);
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide w-75 mx-auto"
      onLoad={load}
      // data-bs-touch="false"
      // data-bs-interval="false"
    >
      <div className="w-100 h-auto carousel-inner position-relative">
        {(data || []).map((slide, index) => {
          return (
            <div
              className={`carousel-item 
                ${slideIndex === index ? "active" : ""}`}
              key={"slide" + index}
              style={{
                backgroundImage: `url("./slider-images/${slide.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
            >
              <div className="w-100 d-block text-center text-white top-50 start-50 position-absolute translate-middle">
                <h1 className="fs-2">{slide.title.toUpperCase()}</h1>
                <p>{slide.context}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev my-auto"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
        // onClick={prevButton}
      >
        <strong
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></strong>
        {/* <strong className="visually-hidden">Previous</strong> */}
      </button>
      <button
        className="carousel-control-next my-auto"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
        // onClick={nextButton}
      >
        <strong
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></strong>
        {/* <strong className="visually-hidden">Next</strong> */}
      </button>
    </div>
  );
};
