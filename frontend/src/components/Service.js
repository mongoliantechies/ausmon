import React from "react";
import { useParams } from "react-router-dom";
const serviceDataMon = require("../DataMon/serviceData.json");
const serviceDataEng = require("../DataEng/serviceData.json");

export const Service = ({ language }) => {
  const service = language === "mon" ? serviceDataMon : serviceDataEng;
  const params = useParams();

  const chosenService = service.filter((ser) => ser.id === params.id);
  console.log("chosen", chosenService);

  return (
    <div className="service w-75 mx-auto" style={{ textAlign: "justify" }}>
      <h1>{chosenService[0].name}</h1>
      <div>
        {chosenService[0].lists.map((list) => {
          return (
            <div className="service-contents" key={list.id}>
              <h2>{list.title}</h2>
              <p>{list.context}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
