import { createSlice } from "@reduxjs/toolkit";
const homeProductSlice = createSlice({
  name: "homeProduct",
  initialState: { id: "", title: "", imageUrl: "", price: "", description: "" },
  reducers: {
    setHomeProduct(state, action) {
      return action.payload;
    },
  },
});
export const { setHomeProduct } = homeProductSlice.actions;
export const homeProductSliceReducer = homeProductSlice.reducer;
