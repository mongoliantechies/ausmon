import React, { useState } from "react";
import "../../styles/navStyle/Nav.css";
import { NavLink } from "react-router-dom";
import { navEng } from "../../DataEng/navEng";
import { navMon } from "../../DataMon/navMon";
// import { SearchBar } from "../SearchBar";
import { Language } from "../Language";
import { HomeLogo } from "./HomeLogo";
// import { HiddenNav } from "./HiddenNav";

export const Nav = ({ language, setLanguage }) => {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <div className="row top mx-4 mx-lg-1 mb-lg-0 mx-sm-0 mb-xs-3 mx-lg-auto justify-content-between mb-sm-4 bg-white">
      <div className="nav col-lg-11 col-md-3 col-sm-6 mx-sm-2 p-0 m-0 justify-content-around">
        <div className="nav-hidden col-lg-2 mx-auto">
          <div
            className="nav-menu col-md-2 col-xs-12 mx-auto"
            onClick={(e) => setNavHidden(false)}
          >
            <img
              src={process.env.PUBLIC_URL + `/event-icons/menu_icon.webp`}
              alt="nav-menu"
              // dataBsToggle="collapse"
              // dataBsTarget="#collapseWidthExample"
              // ariaExpanded="false"
              // ariaControls="collapseWidthExample"
            />
          </div>
          <HomeLogo />
        </div>
        <div
          onMouseLeave={(e) => setNavHidden(true)}
          className="nav-hidden-links col-lg-10"
          style={
            navHidden === true
              ? {
                  top: "-380px",
                  transition:
                    "top 0.5s ease-in-out 0.7s, opacity 0.5s ease-in-out 0.5s",
                }
              : {}
          }
        >
          <NavLink to="/" activeClassName="active" className="nav-link">
            {language === "mon"
              ? "Нүүр хуудас".toUpperCase()
              : "Home".toUpperCase()}
          </NavLink>

          {(language === "mon" ? navMon : navEng).map((nav) => {
            return (
              <NavLink
                to={`/${nav.engName.replace(/ /g, "").toLowerCase()}`}
                className="nav-link"
                activeClassName="active"
                key={nav.id}
              >
                {nav.name.toUpperCase()}
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* <SearchBar /> */}
      <Language language={language} setLanguage={setLanguage} />
    </div>
  );
};
