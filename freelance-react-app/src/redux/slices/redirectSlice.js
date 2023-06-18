import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "",
  valid: 0,
};

export const redirectSlice = createSlice({
  name: "redirect",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setValid: (state, action) => {
      state.valid = action.payload;
    },
  },
});

export const { setPage, setValid } = redirectSlice.actions;

export default redirectSlice.reducer;
