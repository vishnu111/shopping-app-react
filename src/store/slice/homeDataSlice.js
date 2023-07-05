import { createSlice } from "@reduxjs/toolkit";
const homeDataSlice = createSlice({
  name: "dataShow",
  initialState: true,
  reducers: {
    switchState(state, action) {
      return action.payload;
    },
  },
});
export const { switchState } = homeDataSlice.actions;
export const homeDataSliceReducer = homeDataSlice.reducer;
