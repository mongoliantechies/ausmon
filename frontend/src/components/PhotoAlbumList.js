import React, { memo, useState } from "react";
import { PhotoAlbumDetail } from "./PhotoAlbumDetail";
const albumMon = require("../DataMon/album.json");
const albumEng = require("../DataEng/album.json");

export const PhotoAlbumList = memo(({ language }) => {
  const album = language === "mon" ? albumMon : albumEng;
  const [popUp, setPopUp] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [date, setDate] = useState(null);
  return (
    <div className="row w-100 justify-content-evenly mx-0">
      <h1 className="col-12 text-center my-4">
        {language === "mon" ? "Зургын Цомог" : "Photo Album"}
      </h1>
      <ul className="row gap-1 justify-content-evenly gap-lg-2">
        {(album || []).map((al) => {
          return (
            <li
              className="card col-xs-4 col-sm-5 col-md-3 col-lg-2 p-2 gap-1"
              key={al.date}
            >
              <img
                // width={160}
                // height={120}
                // className="car-img-top"
                src={
                  process.env.PUBLIC_URL + `/Aus-Mon-Logo/logo_vertical.webp`
                }
                alt=""
              />
              <h5
              // className="card-title"
              >
                Title
              </h5>
              <p
              // className="card-text"
              >
                {al.date}
              </p>
              <button
                type="button"
                className="btn btn-primary fs-sm-3"
                onClick={() => {
                  setPopUp(true);
                  setPhotos(al.photos);
                  setDate(al.date);
                }}
              >
                More Photos
              </button>
            </li>
          );
        })}
      </ul>
      {popUp ? (
        <PhotoAlbumDetail date={date} photos={photos} setPopUp={setPopUp} />
      ) : (
        ""
      )}
    </div>
  );
});
