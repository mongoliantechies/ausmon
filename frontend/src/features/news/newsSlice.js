import { createSlice } from "@reduxjs/toolkit";
import dataEng from "../../DataEng/newsResource.json";
import dataMon from "../../DataMon/newsResource.json";
// const allNews = require("../../Data/newsResource");

// need to seperate previews and fullNews
// export const loadNews = createAsyncThunk("news/loadNews", async () => {
//   const response = await fetch("data.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   return response.json();
// });

export const newsLang = (lang) => {
  return { type: "news/newsLang", payload: lang === "mon" ? dataMon : dataEng };
};

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    isLoadingArticle: false,
    failedToLoadArticle: false,
  },
  reducers: {
    newsLang: (state, action) => {
      state.articles = action.payload;
    },
  },
  //   extraReducers: {
  //     [loadNews.pending]: (state) => {
  //       state.isLoadingArticle = true;
  //       state.failedToLoadArticle = false;
  //     },
  //     [loadNews.fulfilled]: (state, action) => {
  //       state.articles = action.payload;
  //       state.isLoadingArticle = false;
  //       state.failedToLoadArticle = false;
  //     },
  //     [loadNews.rejected]: (state) => {
  //       state.isLoadingArticle = false;
  //       state.failedToLoadArticle = true;
  //     },
  //   },
});

export const selectArticles = (state) => {
  return state.news.articles;
};
export const isLoadingArticle = (state) => {
  return state.news.isLoadingArticle;
};
export default newsSlice.reducer;
// console.log("all", selectArticles);
