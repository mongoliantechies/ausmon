import React from "react";

export const IndexDots = ({ dotLength, slideIndex, setSlideIndex }) => {
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="dots-container">
      {Array.from({ length: dotLength }).map((arr, index) => {
        return (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active-dot" : "dot"}
          ></div>
        );
      })}
    </div>
  );
};
