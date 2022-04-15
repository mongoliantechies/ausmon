import { createSlice } from "@reduxjs/toolkit";
const loadEvents = require("../../DataMon/eventsResource.json");

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: loadEvents,
    isLoadingEvents: false,
    failedLoadingEvents: false,
  },
  reducers: {},
});

export const selectEvents = (state) => state.events.events;
export default eventsSlice.reducer;
