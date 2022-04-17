import React from "react";
// import { UpcomingEvents } from "../features/events/Events";
import "../styles/upcomingEvents.css";
import { Subscribe } from "../features/subscribe/Subscribe";

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      {/* <section></section> */}
      <section>
        <Subscribe />
      </section>
    </div>
  );
};
