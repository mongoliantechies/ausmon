import React, { memo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { newsLang } from "../features/news/newsSlice";
// import { newsByIdLang } from "../features/news/newsByIdSlice";
import { serviceData } from "../features/services/servicesSlice";
import { footerLang } from "../features/footer/footerSlice";

export const Language = memo(({ language, setLanguage }) => {
  const dispatch = useDispatch();
  const toggleLanguage = useCallback(
    () => setLanguage(language === "mon" ? "eng" : "mon"),
    [setLanguage, language]
  );

  useEffect(() => {
    dispatch(newsLang(language));
    dispatch(serviceData(language));
    dispatch(footerLang(language));
    // dispatch(newsByIdLang(language));
    // console.log(dispatch(newsLang(language)));
  }, [language, dispatch]);

  return (
    <div
      className="language col-lg-1 mx-md-5 mx-lg-1 px-0 mx-1"
      style={{ width: "auto", alignSelf: "center" }}
    >
      <Redirect to="/">
        <img
          onClick={toggleLanguage}
          src={
            language === "mon" ? "/mongolia-flag.webp" : "/australia-flag.webp"
          }
          alt="language"
          style={{ width: "30px", height: "20px" }}
        />
      </Redirect>
    </div>
  );
});
