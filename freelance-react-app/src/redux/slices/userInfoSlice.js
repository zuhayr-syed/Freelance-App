import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  first: "",
  last: "",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirst: (state, action) => {
      state.first = action.payload;
    },
    setLast: (state, action) => {
      state.last = action.payload;
    },
  },
});

export const { setEmail, setFirst, setLast } = userInfoSlice.actions;

export default userInfoSlice.reducer;
