import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const loadEventsMon = require("../../DataMon/eventsResource.json");
const loadEventsEnd = require("../../DataEng/eventsResource.json");

export const loadEventById = createAsyncThunk(
  "eventById/loadEventById",
  async (data) => {
    const response =
      (await data.language) === "mon" ? loadEventsMon : loadEventsEnd;
    const events = await response.filter((event) => event.id === data.id);
    return events[0];
  }
);

// export const loadEventById = (id) => {};
export const eventByIdSlice = createSlice({
  name: "eventById",
  initialState: {
    event: {},
    isLoadingEventById: false,
    failedToLoadEventById: false,
  },
  reducers: {},
  extraReducers: {
    [loadEventById.pending]: (state) => {
      state.isLoadingEventById = true;
      state.failedToLoadEventById = false;
    },
    [loadEventById.fulfilled]: (state, action) => {
      state.event = action.payload;
      state.isLoadingEventById = false;
      state.failedToLoadEventById = false;
    },
    [loadEventById.rejected]: (state) => {
      state.isLoadingFullNews = false;
      state.failedToLoadFullNews = true;
    },
  },
});

export const selectEventById = (state) => state.eventById.event;
export const { isLoadingEventById, failedToLoadEventById } =
  eventByIdSlice.actions;
export default eventByIdSlice.reducer;
