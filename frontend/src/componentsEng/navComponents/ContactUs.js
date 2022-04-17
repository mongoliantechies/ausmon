import React from "react";
import "../../styles/navStyle/contactUs.css";
import { navMon } from "../../DataMon/navMon";
import { navEng } from "../../DataEng/navEng";
import { Link } from "react-router-dom";
import { SendEmail } from "./SendEmail";

export const ContactUs = ({ language }) => {
  const dataSource = language === "mon" ? navMon : navEng;
  const contactData = Object.values(dataSource).filter((element) => {
    return element.name === "Холбоо Барих"
      ? element.name === "Холбоо Барих"
      : element.name === "Contact Us";
  });

  return (
    <div className="contactUs row my-5">
      <h1 className="col-lg-12 col-md-8 mx-auto">
        {dataSource === navMon
          ? `Бидэнтэй ${contactData[0].name}`
          : contactData[0].name}
      </h1>
      <div className="contactUs-content col-lg-12 col-md-8 mx-auto">
        <span>
          <img
            src={
              process.env.PUBLIC_URL + `/contact-icons/contact-phone-icon.png`
            }
            alt="tel"
          />
          {contactData[0].content.phone}
        </span>
        <span>
          <img
            src={process.env.PUBLIC_URL + `/contact-icons/email-icon.png`}
            alt="email"
          />
          {contactData[0].content.email}
        </span>
        <span>
          <img
            src={process.env.PUBLIC_URL + `/contact-icons/facebook_icon.png`}
            alt="social"
          />
          <Link to={contactData[0].content.socialMedia}>
            {contactData[0].content.socialMedia}
          </Link>
        </span>
      </div>
      <SendEmail language={language} emailTo={contactData[0].content.email} />
    </div>
  );
};
