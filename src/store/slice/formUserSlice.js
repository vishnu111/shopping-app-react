import { createSlice } from "@reduxjs/toolkit";
const formUserSlice = createSlice({
  name: "users",
  initialState: { firstname: "", email: "", phone: "" },
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});
export const { setUser } = formUserSlice.actions;
export const formUserReducer = formUserSlice.reducer;
