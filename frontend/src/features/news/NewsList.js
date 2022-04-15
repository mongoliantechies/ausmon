import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, isLoadingArticle, loadNews } from "./newsSlice.js";
import { loadNewsById } from "./newsByIdSlice.js";
import { FullNews } from "./FullNews.js";
import "../../styles/news.css";
import { Link } from "react-router-dom";

export const NewsList = ({ language }) => {
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();
  // console.log("date", Date.parse(new Date()), new Date());

  return (
    <div className="row">
      <div className="news-title">
        <h2>{language === "mon" ? "Мэдээ" : "News"}</h2>
      </div>
      <div className="news-container ">
        {(articles || []).map((article) => {
          return (
            <div className="articles col" key={article.id}>
              <img src={article.image} alt={article.title} />
              <div className="news-date">
                <img
                  src={process.env.PUBLIC_URL + "/event-icons/clock-icon.png"}
                  alt="clock-icon"
                />
                {article.date}
              </div>
              <div id="article-context">
                <h3>{article.title}</h3>
                <p>{article.preview}</p>
              </div>
              <Link
                to={
                  language == "mon"
                    ? `/мэдээ/${article.id}`
                    : `/news/${article.id}`
                }
              >
                <button
                  onClick={(e) => {
                    dispatch(
                      loadNewsById({ id: article.id, language: language })
                    );
                  }}
                >
                  Read more
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
