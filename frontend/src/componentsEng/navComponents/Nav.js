import React, { useEffect, useRef, useState } from "react";
import "../../styles/navStyle/Nav.css";
import { NavLink } from "react-router-dom";
import { navEng } from "../../DataEng/navEng";
import { navMon } from "../../DataMon/navMon";
// import { SearchBar } from "../SearchBar";
import { Language } from "../Language";

export const Nav = ({ language, setLanguage }) => {
  const divRef = useRef(null);
  const [navHidden, setNavHidden] = useState(true);

  const toggleNavLinks = () => {
    setNavHidden(!navHidden);
  };
  // console.log("language", language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setNavHidden(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div
      className="row top mx-4 mx-lg-1 mb-lg-0 mx-sm-0 mb-xs-3 mx-lg-auto justify-content-between mb-sm-4"
      style={{
        backgroundColor: "white",
        // justifyContent: "space-evenly",
      }}
    >
      <div className="nav col-lg-11 col-md-3 col-sm-6 mx-sm-2 p-0 m-0 justify-content-around">
        <div className="nav-hidden col-lg-2 mx-auto">
          {
            <div
              ref={divRef}
              className="nav-menu col-md-2 col-xs-12 mx-auto"
              onClick={toggleNavLinks}
            >
              <img
                src={process.env.PUBLIC_URL + `/event-icons/menu_icon.png`}
                alt="nav-menu"
              />
            </div>
          }
          <NavLink to="/" className="nav-logo col-xs-12">
            <img src="/ausmon-logo.png" alt="AusMon Logo" />
          </NavLink>
        </div>
        <div
          className="nav-hidden-links col-lg-10"
          style={
            navHidden === true
              ? {
                  top: "-255px",
                  transition:
                    "top 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s",
                }
              : {}
          }
        >
          <NavLink to="/" activeClassName="active" className="nav-link">
            {"Home".toUpperCase()}
          </NavLink>

          {Object.values(language === "mon" ? navMon : navEng).map((nav) => {
            return (
              <NavLink
                to={`/${nav.name.replace(/ /g, "").toLowerCase()}`}
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
