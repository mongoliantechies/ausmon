import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents } from "./eventsSlice";

import "../../styles/events.css";
import { loadEventById } from "./eventByIdSlice";
import { Link } from "react-router-dom";
import { Language } from "../../componentsEng/Language";

export const Events = ({ language }) => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();

  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="events-title">
        <h1>{language == "mon" ? "Үйл ажиллагаа" : "Events"}</h1>
        <hr></hr>
      </div>
      <div className="events-container">
        {(events || []).map((event) => {
          return (
            <Link
              to={
                language == "mon"
                  ? `/үйлажиллагаа/${event.id}`
                  : `/events/${event.id}`
              }
              style={{ textDecoration: "none" }}
            >
              <div
                onClick={(e) => {
                  return dispatch(loadEventById({id: event.id, language: language}));
                }}
                className="events col"
                key={event.id}
              >
                <div className="date">
                  <h3>{event.date.day}</h3>
                  <p>
                    {event.date.month} {event.date.year}
                  </p>
                </div>
                <h4>{event.name}</h4>
                <div className="event-time">
                  <img
                    src={process.env.PUBLIC_URL + `/event-icons/clock-icon.png`}
                    alt="clock-icon"
                  />
                  <p>{event.time}</p>
                </div>
                <div className="event-location">
                  <img
                    src={
                      process.env.PUBLIC_URL + `/event-icons/location-icon.png`
                    }
                    alt="location-icon"
                  />
                  <p>{event.location}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
