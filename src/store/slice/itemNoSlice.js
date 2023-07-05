import { createSlice } from "@reduxjs/toolkit";
const itemNoSlice = createSlice({
  name: "itemNo",
  initialState: 0,
  reducers: {
    setItemNo(state, action) {
      return action.payload;
    },
  },
});
export const { setItemNo } = itemNoSlice.actions;
export const itemNoSliceReducer = itemNoSlice.reducer;
