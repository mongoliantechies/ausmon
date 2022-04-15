import { createSlice } from "@reduxjs/toolkit";

export const addUser = (user) => {
  return { type: "subscribe/addUser", action: user };
};

export const subscribesSlice = createSlice({
  name: "subscribe",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const selectUsers = (state) => state.users;
export default subscribesSlice.reducer;
