import React from "react";

export const Swiper = () => {
  const swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 0,
    loop: true,
    effect: "slide",
    longSwipes: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: true,
  });

  // $(".swiper-container").mouseenter(function(){
  //     swiper.stopAutoplay();
  // });

  // $(".swiper-container").mouseleave(function(){
  //     swiper.startAutoplay();
  // });
  return (
    <div
      className="swiper-container"
      onMouseEnter={(e) => swiper.stopAutoplay()}
      onMouseleave={(e) => swiper.startAutoplay()}
    >
      <h1>Swiper</h1>
    </div>
  );
};
