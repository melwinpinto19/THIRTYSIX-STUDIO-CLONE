import { createSlice } from "@reduxjs/toolkit";

// for useSelector
export interface CanvasSlice {
  canvas: CanvasState;
}

export interface CanvasState {
  showCanvas: boolean;
}

const initialState: CanvasState = {
  showCanvas: false,
};

export const canavsSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    showCanvas: (state) => {
      state.showCanvas = true;
    },
    hideCanvas: (state) => {
      state.showCanvas = false;
    },

    toggleCanvas: (state) => {
      state.showCanvas = !state.showCanvas;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showCanvas, hideCanvas, toggleCanvas } = canavsSlice.actions;

export default canavsSlice.reducer;
