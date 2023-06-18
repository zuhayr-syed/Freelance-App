import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: 0,
};

export const signedInSlice = createSlice({
  name: "signedIn",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.logged = action.payload;
    },
  },
});

export const { setStatus } = signedInSlice.actions;

export default signedInSlice.reducer;
