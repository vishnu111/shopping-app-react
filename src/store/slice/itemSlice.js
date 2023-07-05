import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    setItems(state, action) {
      return action.payload;
    },
  },
});
export const { setItems } = itemSlice.actions;
export const itemSliceReducer = itemSlice.reducer;
