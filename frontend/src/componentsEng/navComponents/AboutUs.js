import React from "react";
import { navEng } from "../../DataEng/navEng";
import { navMon } from "../../DataMon/navMon";
import "../../styles/navStyle/aboutUs.css";

export const AboutUs = ({ language }) => {
  const aboutUs = language == "mon" ? navMon[0] : navEng[0];
  return (
    <div className="aboutUs container mx-5">
      <img
        className="row col-lg-3 mx-auto"
        src={process.env.PUBLIC_URL + `/Aus-Mon-Logo/logo_horizontal.png`}
        alt="AusMon Logo"
      />
      <div className="aboutUs-contents row justify-content-around">
        {aboutUs.content.map((section) => {
          return (
            // <div className="aboutUs-content">
            <div className="aboutUs-title col-lg-8 px-4 mx-auto">
              <h1>{section.title.toUpperCase()}</h1>
              {/* <ul> */}
              {section.context.map((el) => {
                return (
                  <div className="aboutUs-context" key={el.subName}>
                    {/* <li> */}
                    <h2>{el.subName}</h2>
                    <p>{el.text}</p>
                    {/* </li> */}
                  </div>
                );
              })}
              {/* </ul> */}
            </div>
            // </div>
          );
        })}
        ;
      </div>
      {/* <p>Мэдээллийг 0420 663 018 болон 0415 674 556 дугаараас лавлаарай.</p> */}
    </div>
  );
};
