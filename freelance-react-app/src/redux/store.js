import { configureStore } from "@reduxjs/toolkit";
import signedInSliceReducer from "./slices/signedInSlice";
import redirectSliceReducer from "./slices/redirectSlice";
import userInfoSliceReducer from "./slices/userInfoSlice";

export const store = configureStore({
  reducer: {
    signedIn: signedInSliceReducer,
    redirect: redirectSliceReducer,
    userInfo: userInfoSliceReducer,
  },
});
