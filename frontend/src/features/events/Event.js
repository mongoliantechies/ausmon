import React from "react";
import { useSelector } from "react-redux";
import { selectEventById } from "./eventByIdSlice";

export const Event = () => {
  const eventById = useSelector(selectEventById);
  // console.log("event", eventById);
  return (
    <div className="eventById">
      <img
        src={process.env.PUBLIC_URL + `/slider-images/${eventById.image}`}
        alt={eventById.name}
      />
      <h1>{eventById.name}</h1>
    </div>
  );
};
