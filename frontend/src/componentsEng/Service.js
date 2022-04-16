import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
const serviceDataMon = require("../DataMon/serviceData.json");
const serviceDataEng = require("../DataEng/serviceData.json");

export const Service = ({ language }) => {
  const params = useParams();
  // console.log("hekdfj", params);
  const fetchService = language === "mon" ? serviceDataMon : serviceDataEng;
  const service = fetchService.filter((service) => {
    return service.name.replace(/ /g, "").toLowerCase() === params.name;
  });
  console.log(service[0]);

  return (
    <div className="service w-75 mx-auto" style={{ textAlign: "justify" }}>
      <h1>{service[0].name}</h1>
      <div>
        {service[0].lists.map((list) => {
          return (
            <div className="service-contents">
              <Link>
                <h2>{list.title}</h2>
              </Link>
              <p>{list.context}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
