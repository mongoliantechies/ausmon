import React from "react";
import "../styles/services.css";
import { useSelector } from "react-redux";
import { selectServices } from "../features/services/servicesSlice";
// import { Service } from "./Service.js";
import { Link } from "react-router-dom";

export const ServiceList = ({ language, match }) => {
  const services = useSelector(selectServices);

  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="service-title">
        <h1>
          {language === "mon" ? "Бид таньд яаж туслах вэ?" : "How can we help?"}
        </h1>
        <hr></hr>
      </div>
      <div className="service-container">
        {(services || []).map((service) => {
          return (
            <Link
              to={
                language === "mon"
                  ? `/сервис/${service.name.replace(/ /g, "").toLowerCase()}`
                  : `/service/${service.name.replace(/ /g, "").toLowerCase()}`
              }
            >
              <div className="services col" key={service.id}>
                <img
                  src={
                    process.env.PUBLIC_URL + `/service-images/${service.image}`
                  }
                  alt={service.title}
                />
                {service.name.toUpperCase()}
                <hr></hr>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
