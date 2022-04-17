import React from "react";
import { useSelector } from "react-redux";
import {
  isLoadingFullNews,
  // loadNewsById,
  selectFullNews,
} from "./newsByIdSlice";

export const FullNews = () => {
  const article = useSelector(selectFullNews);
  // const isFullNewsLoading = isLoadingFullNews;
  // const dispatch = useDispatch();

  // console.log("preview", article);

  // useEffect(() => {
  //   dispatch(loadNewsById(article));
  // }, [article]);

  if (isLoadingFullNews) {
    return <div>Loading...</div>;
  }

  return (
    <section className="fullNews">
      <img src={process.env.PUBLIC_URL + article.image} alt={article.title} />
      <span>{article.date}</span>
      <h2>{article.title}</h2>
      <p>{article.fullNews}</p>
    </section>
  );
};
