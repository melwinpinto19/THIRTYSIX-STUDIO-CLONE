import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./reducers/canavsSlice";

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
  },
});
