import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { newsLang } from "../features/news/newsSlice";
import { newsByIdLang } from "../features/news/newsByIdSlice";
import { serviceData } from "../features/services/servicesSlice";
import { footerLang } from "../features/footer/footerSlice";

export const Language = ({ language, setLanguage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsLang(language));
    dispatch(serviceData(language));
    dispatch(footerLang(language));
    // dispatch(newsByIdLang(language));
    // console.log(dispatch(newsLang(language)));
  }, [language]);

  return (
    <div
      className="language col-lg-1 mx-lg-3 mx-md-5 mx-lg-1 px-0 mx-1"
      style={{ width: "auto", alignSelf: "center" }}
    >
      <Redirect to="/">
        <img
          onClick={() => setLanguage(language === "mon" ? "eng" : "mon")}
          src={
            language === "mon" ? "/mongolia-flag.png" : "/australia-flag.jpg"
          }
          alt="australia"
          style={{ width: "30px", height: "20px" }}
        />
      </Redirect>
    </div>
  );
};
