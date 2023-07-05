import { configureStore } from "@reduxjs/toolkit";
import { blueReducer, addBlue, removeBlue } from "./slices/blueSlice";
import { greenReducer, addGreen, removeGreen } from "./slices/greenSlice";
const store = configureStore({
  reducer: {
    blue: blueReducer,
    green: greenReducer,
  },
});
export { store, addBlue, removeBlue, addGreen, removeGreen };
