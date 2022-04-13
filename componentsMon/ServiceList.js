import React from "react";
import "../styles/services.css";
import { useSelector } from "react-redux";
import { selectServices } from "../features/services/servicesSlice";
import { Service } from "./Service.js";
import { Link } from "react-router-dom";

export const ServiceList = () => {
  const services = useSelector(selectServices);
  console.log("ser", services);
  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="service-title">
        <h1>How can we help?</h1>
        <hr></hr>
      </div>
      <div className="service-container">
        {(services || []).map((service) => {
          return (
            <div
              className="service col"
              key={service.id}
              onClick={(e) => {
                return (
                  <Link to={"/"}>
                    <Service service={service} />
                  </Link>
                );
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL + `/service-images/${service.image}`
                }
                alt={service.title}
              />
              {service.name.toUpperCase()}
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};
