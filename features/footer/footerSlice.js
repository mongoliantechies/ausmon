import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const footerLinksMon = require("../../DataMon/footerData.json");
const footerLinksEng = require("../../DataEng/footerData.json");

export const footerLang = createAsyncThunk(
  "footer/footerLang",
  async (lang) => {
    const data = await (lang == "mon" ? footerLinksMon : footerLinksEng);
    return data;
  }
);

export const footerSlice = createSlice({
  name: "footer",
  initialState: {
    links: [],
    isLoadingLinks: false,
    failedLoadingLinks: false,
  },
  // reducers: {},
  extraReducers: {
    [footerLang.pending]: (state) => {
      state.isLoadingLinks = true;
      state.failedLoadingLinks = false;
    },
    [footerLang.fulfilled]: (state, action) => {
      state.isLoadingLinks = false;
      state.links = action.payload;
      state.failedLoadingLinks = false;
    },
    [footerLang.pending]: (state) => {
      state.isLoadingLinks = false;
      state.failedLoadingLinks = true;
    },
  },
});

export const selectFooterLinks = (state) => state.footer.links;
export default footerSlice.reducer;
