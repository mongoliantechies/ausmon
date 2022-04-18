import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const loadFullNewsMon = require("../../DataMon/newsResource");
const loadFullNewsEng = require("../../DataEng/newsResource");

export const loadNewsById = createAsyncThunk(
  "newsById/loadNewsById",
  async (data, thunkAPI) => {
    const response =
      (await data.language) == "mon" ? loadFullNewsMon : loadFullNewsEng;
    const news = await response.filter((news) => news.id === data.id);
    return news[0];
    // const res = response.json();
    // return res.filter((news) => {
    //   return (news.id = id);
    // });
  }
);

// export const newsByIdLang = (lang) => {
//   return {
//     type: "newsById/newsByIdLang",
//     payload: lang,
//   };
// };

// export const loadNewsById = (id) => {
//   return {
//     type: "newsById/loadNewsById",
//     payload: loadFullNews.filter((news) => news.id === id),
//   };
// };

export const newsByIdSlice = createSlice({
  name: "newsById",
  initialState: {
    fullNews: {},
    isLoadingFullNews: false,
    failedToLoadFullNews: false,
  },
  reducers: {
    // loadNewsById: (state, action) => {
    //   state.fullNews = action.payload[0];
    //   console.log("kdjk", state.fullNews);
    // },
    newsByIdLang: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: {
    [loadNewsById.pending]: (state) => {
      state.isLoadingFullNews = true;
      state.failedToLoadFullNews = false;
    },
    [loadNewsById.fulfilled]: (state, action) => {
      state.fullNews = action.payload;
      state.isLoadingFullNews = false;
      state.failedToLoadFullNews = false;
      // console.log("hey", state.fullNews);
    },
    [loadNewsById.rejected]: (state) => {
      state.isLoadingFullNews = false;
      state.failedToLoadFullNews = true;
    },
  },
});

export const selectFullNews = (state) => {
  return state.fullNews.fullNews;
};

export const selectLanguage = (state) => {
  return state.language;
};

export const { isLoadingFullNews, failedToLoadFullNews } =
  newsByIdSlice.actions;
export default newsByIdSlice.reducer;
// export const loadingFullNews = (state) => {
//   return state.newsById.isLoadingFullNews;
// };
