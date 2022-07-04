import React from "react";
import { NavLink } from "react-router-dom";

export const HomeLogo = () => {
  return (
    <NavLink to="/" className="nav-logo col-xs-12">
      <img src={`/Aus-Mon-Logo/ausmon-logo.webp`} alt="AusMon Logo" />
    </NavLink>
  );
};
