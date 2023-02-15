import { configureStore } from "@reduxjs/toolkit";
import { Product, ProductOne } from "./slices/todoSlice";
export const store = configureStore({
  reducer: { todo: Product, todo2: ProductOne },
});
export default store;
