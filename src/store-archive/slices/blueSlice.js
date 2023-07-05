import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const blueSlice = createSlice({
  name: "blue",
  initialState,
  reducers: {
    addBlue(state, action) {
      state.count += 1;
    },
    removeBlue(state, action) {
      state.count -= 1;
    },
  },
});
export const { addBlue, removeBlue } = blueSlice.actions;
export const blueReducer = blueSlice.reducer;
