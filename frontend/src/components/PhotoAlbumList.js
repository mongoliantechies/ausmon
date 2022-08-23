import React from "react";
import { Link } from "react-router-dom";
const albumMon = require("../DataMon/album.json");
const albumEng = require("../DataEng/album.json");

export const PhotoAlbumList = ({ language }) => {
  const album = language === "mon" ? albumMon : albumEng;
  return (
    <div className="row w-100 justify-content-evenly mx-0">
      <h1 className="col-12 text-center my-4">
        {language == "mon" ? "Зургын Цомог" : "Photo Album"}
      </h1>
      <ul className="row gx-5 gap-3 justify-content-evenly">
        {(album || []).map((al) => {
          return (
            <li className="card w-25 col-sm-12 col-md-4 gap-1 py-2">
              <img
                className="car-img-top bg-"
                src={
                  process.env.PUBLIC_URL + `/Aus-Mon-Logo/logo_vertical.webp`
                }
                alt=""
              />
              <h5 className="card-title">Title</h5>
              <p className="card-text">{al.date}</p>
              <Link to={`/album/${al.date}`} className="btn btn-primary">
                more
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
