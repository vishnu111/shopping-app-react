import { configureStore } from "@reduxjs/toolkit";
import { productReducer, setProduct } from "./slice/productSlice";
import { homeDataSliceReducer, switchState } from "./slice/homeDataSlice";
import { itemSliceReducer, setItems } from "./slice/itemSlice";
import { cartSliceReducer, setCart } from "./slice/cartSlice";
import { itemNoSliceReducer, setItemNo } from "./slice/itemNoSlice";
import {
  homeProductSliceReducer,
  setHomeProduct,
} from "./slice/homeProductSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    dataShow: homeDataSliceReducer,
    items: itemSliceReducer,
    cart: cartSliceReducer,
    itemNo: itemNoSliceReducer,
    homeProduct: homeProductSliceReducer,
  },
});
export {
  store,
  setProduct,
  switchState,
  setItems,
  setCart,
  setItemNo,
  setHomeProduct,
};
