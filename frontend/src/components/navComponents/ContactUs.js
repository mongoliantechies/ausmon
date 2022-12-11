import React, { useMemo } from "react";
import "../../styles/navStyle/contactUs.css";
import { navMon } from "../../DataMon/navMon";
import { navEng } from "../../DataEng/navEng";
// import { Link } from "react-router-dom";
import { SendEmail } from "./SendEmail";

export const ContactUs = ({ language }) => {
  const dataSource = language === "mon" ? navMon : navEng;
  const contactData = useMemo(() => {
    return Object.values(dataSource).filter((element) => {
      return element.name === "Холбоо Барих"
        ? element.name === "Холбоо Барих"
        : element.name === "Contact Us";
    });
  }, [dataSource]);

  return (
    <div className="contactUs row py-5">
      <h1 className="col-lg-12 col-md-8 mx-auto">
        {dataSource === navMon
          ? `Бидэнтэй ${contactData[0].name}`
          : contactData[0].name}
      </h1>
      <SendEmail language={language} emailTo={contactData[0].content.email} />
      <div className="contactUs-content col-lg-12 col-md-8 mx-auto">
        <span>
          <img
            src={
              process.env.PUBLIC_URL + `/contact-icons/contact-phone-icon.webp`
            }
            alt="tel"
          />
          {contactData[0].content.phone}
        </span>
        <span>
          <img
            src={process.env.PUBLIC_URL + `/contact-icons/email-icon.webp`}
            alt="email"
          />
          {contactData[0].content.email}
        </span>
        <span>
          <img
            src={process.env.PUBLIC_URL + `/contact-icons/facebook_icon.webp`}
            alt="social"
          />
          <a
            href={contactData[0].content.socialMedia}
            target="_blank"
            rel="noreferrer"
          >
            {contactData[0].content.socialMedia}
          </a>
        </span>
      </div>
    </div>
  );
};
