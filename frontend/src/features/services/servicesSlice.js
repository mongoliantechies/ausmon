import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const serviceDataMon = require("../../DataMon/serviceData.json");
const serviceDataEng = require("../../DataEng/serviceData.json");

export const serviceData = createAsyncThunk(
  "services/serviceData",
  async (data) => {
    const fetchServiceData =
      (await data) === "mon" ? serviceDataMon : serviceDataEng;
    // console.log(fetchServiceData);
    return fetchServiceData;
  }
);

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    allServices: [],
    isLoadingServices: false,
    failedLoadingServices: false,
  },
  // reducers: {
  //   serviceData: (state, action) => {
  //     state.allServices = action.payload;
  //     console.log("", state.allServices);
  //   },
  extraReducers: {
    [serviceData.pending]: (state) => {
      state.isLoadingServices = true;
      state.failedLoadingServices = false;
    },
    [serviceData.fulfilled]: (state, action) => {
      state.isLoadingServices = false;
      state.allServices = action.payload;
      state.failedLoadingServices = false;
    },
    [serviceData.rejected]: (state) => {
      state.isLoadingServices = false;
      state.failedLoadingServices = true;
    },
  },
});

export const selectServices = (state) => state.services.allServices;
export default servicesSlice.reducer;
