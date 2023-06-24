import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  fullName: "",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

export const { setEmail, setFullName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
