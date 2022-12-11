import React, { memo } from "react";
import "../styles/photo.css";

export const PhotoAlbumDetail = memo(({ date, photos, setPopUp }) => {
  let slideIndex = 0;

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide slide-container align-items-center carousel-fade"
      // data-bs-ride="carousel"
    >
      <button
        className="btn text-white mt-2"
        type="button"
        onClick={() => setPopUp(false)}
      >
        Close
      </button>
      <div className="carousel-inner slide-inner">
        {(photos || []).map((photo, index) => {
          return (
            <div
              className={`slide-item carousel-item ${
                slideIndex === index ? "active" : ""
              }`}
              style={{
                backgroundImage: `url("./ausmon-photo-album/${date}/${photo}")`,
              }}
            >
              {/* <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev my-auto"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Previous</span> */}
      </button>
      <button
        className="carousel-control-next my-auto"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Next</span> */}
      </button>
      <div className="carousel-indicators thumbs h-auto mx-auto justify-content-evenly d-none d-md-flex">
        {(photos || []).map((photo, index) => {
          return (
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to={index}
              className={`h-100  ${slideIndex === index ? "active" : ""}`}
              // aria-current={slideIndex === index ? "true" : "false"}
              // aria-label={`Slide ${index}`}
            >
              <img
                className="img-fluid d-block w-100"
                src={`./ausmon-photo-album/${date}/${photo}`}
                alt={photo}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
});
