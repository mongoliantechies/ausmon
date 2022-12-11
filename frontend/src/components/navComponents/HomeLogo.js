import React, { memo, useCallback } from "react";
// import { NavLink } from "react-router-dom";

export const HomeLogo = memo(() => {
  const load = useCallback(() => {
    return (
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }, []);
  return (
    <div className="nav-logo col-xs-12">
      <img
        onLoad={load}
        src={process.env.PUBLIC_URL + `/Aus-Mon-Logo/ausmon-logo.webp`}
        alt="AusMon Logo"
        width={140}
        height={60}
      />
    </div>
  );
});
