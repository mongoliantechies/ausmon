import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFooterLinks } from "../../features/footer/footerSlice";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  const footerLinks = useSelector(selectFooterLinks);
  return (
    <div className="footer-container row mt-5 pt-5 pb-4">
      <div className="col-2 col-lg-3 col-xl-2 col-md-4 col-sm-6 col-xs-12">
        <img
          // className="w-100 h-auto"
          width={320}
          height={110}
          src={
            process.env.PUBLIC_URL + "/Aus-Mon-Logo/logo_horizontal_white.webp"
          }
          alt="AusMon-logo"
        />
      </div>
      <div className="footer-link col-4 col-lg-5 col-sm-10 justify-content-center">
        {(footerLinks || []).map((link) => {
          return (
            <Link
              to={`/${link.engName.replace(/ /g, "").toLowerCase()}`}
              key={link.id}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <SocialMedia />
      <hr></hr>
      <span className="copyright align-items-center justify-content-between">
        <p>
          <img
            width={15}
            height={15}
            src={process.env.PUBLIC_URL + "/social-media-icons/copyright.webp"}
            alt="copyright"
          />
          {""}
          2022 Aus-Mon. All rights reserved.
        </p>
        <p>PRIVACY & POLICY</p>
      </span>
    </div>
  );
};
