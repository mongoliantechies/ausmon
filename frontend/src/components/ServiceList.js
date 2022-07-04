import React from "react";
import "../styles/services.css";
import { useSelector } from "react-redux";
import { selectServices } from "../features/services/servicesSlice";
import { Link } from "react-router-dom";

export const ServiceList = ({ language }) => {
  const services = useSelector(selectServices);

  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="service-title">
        <h1>
          {language === "mon" ? "Үйл ажиллагааны үндсэн чиглэлүүд" : "Services"}
        </h1>
        <hr></hr>
      </div>
      <div className="service-container">
        {(services || []).map((service) => {
          return service.id ? (
            <Link to={`/services/${service.id}`} key={service.id}>
              <div className="services">
                <img
                  src={
                    process.env.PUBLIC_URL + `/service-images/${service.image}`
                  }
                  alt={service.name}
                />
                {service.name.toUpperCase()}
                <hr></hr>
              </div>
            </Link>
          ) : (
            <a href={service.link} key={service.id}>
              <div className="services col" key={service.id}>
                <img
                  src={
                    process.env.PUBLIC_URL + `/service-images/${service.image}`
                  }
                  alt={service.name}
                />
                {service.name.toUpperCase()}
                <hr></hr>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
