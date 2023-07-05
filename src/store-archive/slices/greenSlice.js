import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const greenSlice = createSlice({
  name: "green",
  initialState,
  reducers: {
    addGreen(state, action) {
      state.count += 1;
    },
    removeGreen(state, action) {
      state.count -= 1;
    },
  },
});

export const { addGreen, removeGreen } = greenSlice.actions;
export const greenReducer = greenSlice.reducer;
