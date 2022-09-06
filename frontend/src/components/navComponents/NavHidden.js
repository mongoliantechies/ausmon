import React from "react";
import { memo } from "react";
import { HomeLogo } from "./HomeLogo";

export const NavHidden = memo(({ setNavHidden }) => {
  return (
    <div className="nav-hidden col-lg-2 mx-auto">
      <div
        className="nav-menu col-md-2 col-xs-12 mx-auto"
        onClick={(e) => setNavHidden(false)}
      >
        <img
          width={35}
          height={40}
          src={process.env.PUBLIC_URL + `/event-icons/menu_icon.webp`}
          alt="nav-menu"
        />
      </div>
      <HomeLogo />
    </div>
  );
});
