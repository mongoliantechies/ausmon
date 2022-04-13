import React, { useEffect, useRef, useState } from "react";
import { BtnSlider } from "./BtnSlider";
import "../../styles/slide.css";
import { IndexDots } from "./IndexDots";
import { hover } from "@testing-library/user-event/dist/hover";
const sliderData = require("../../DataMon/sliderData.json");

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slideRef = useRef();

  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(sliderData.length);
    }
  };

  const handleSlideRun = (e) => {
    // useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout();
    };
    // }, [slideIndex]);
  };

  const handleSlideHover = (e) => {
    clearTimeout();
  };

  useEffect(() => {
    console.log("e", slideIndex);
    handleSlideHover();
    handleSlideRun();
  }, [slideIndex]);

  return (
    <div
      // onMouseEnter={(e) => handleSlideHover(slideIndex + 1)}
      className="slide-container"
    >
      {sliderData.map((obj, index) => {
        return (
          <div
            onMouseEnter={(e) => handleSlideHover()}
            onMouseLeave={(e) => handleSlideRun()}
            // ref={slideRef}
            key={obj.id}
            className={
              slideIndex === index + 1
                ? "slide-image active-anim"
                : "slide-image"
            }
          >
            <div className="slide-context">
              <h1>{obj.title.toUpperCase()}</h1>
              <p>{obj.context}</p>
              <div
                className={
                  obj.id === 894573
                    ? "donate-button"
                    : "donate-button-invisible"
                }
              >
                <input type="button" value="DONATE" />
              </div>
            </div>
            <img
              src={process.env.PUBLIC_URL + `/slider-images/${obj.image}`}
              alt={obj.title}
              className="img-fluid"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      <IndexDots
        dotLength={sliderData.length}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </div>
  );
};
