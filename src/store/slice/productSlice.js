import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    title: "",
    imageUrl: "",
    price: "",
    description: "",
  },
  reducers: {
    setProduct(state, action) {
      return action.payload;
    },
  },
});
export const { setProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
