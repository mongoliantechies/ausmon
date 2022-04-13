import React from "react";
import rightArrow from "./icons/rightArrow.png";
import leftArrow from "./icons/leftArrow.png";

export const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
};
