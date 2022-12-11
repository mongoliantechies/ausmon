import React, { useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ServiceDetail } from "./ServiceDetail";
import { useSelector } from "react-redux";
import { selectServices } from "../features/services/servicesSlice";

export const Service = ({ language }) => {
  const service = useSelector(selectServices);
  const params = useParams();
  const [topic, setTopic] = useState();

  const chosenService = service.filter((ser) => {
    return ser.id === params.id;
  });

  const renderTopic = useCallback(() => {
    if (topic) {
      return <ServiceDetail topic={topic} language={language} />;
    }
    return;
  }, [topic, language]);

  return (
    <div className="service w-75 mx-auto" style={{ textAlign: "justify" }}>
      <h1>{chosenService[0].name}</h1>
      <div className="service-container mx-0 w-100">
        {(chosenService[0].lists || []).map((list) => {
          return (
            <Link to={`/services/${chosenService[0].id}/${list.key}`}>
              <div
                style={{
                  maxHeight: "180px",
                  height: "fit-content",
                  minHeight: "140px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
                className="services justify-content-start"
                onClick={(e) => {
                  setTopic(list);
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + `/service-images/${list.image}`}
                  alt=""
                />
                {list.title}
              </div>
            </Link>
          );
        })}
      </div>
      {renderTopic()}
    </div>
  );
};
