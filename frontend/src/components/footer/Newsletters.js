import React from "react";
const dataMon = require("../../DataMon/footerData.json");
const dataEng = require("../../DataEng/footerData.json");

export const Newsletters = ({ language }) => {
  const newsletter = language === "mon" ? dataMon : dataEng;
  const chosenNews = newsletter.filter((news) => news.name === "Newsletters");
  return (
    <div style={{ textAlign: "left", margin: "10px auto", width: "80%" }}>
      <h1>{chosenNews[0].name}</h1>
      <ul>
        {(chosenNews[0].list || []).map((news) => {
          return (
            <li>
              <a href={process.env.PUBLIC_URL + `/newsletters/${news}`}>
                {news}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
