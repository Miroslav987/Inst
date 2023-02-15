import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  products: any;
  productDetails: any;
};

const initialState = {
  products: null,
  productDetails: null,
};

const GetProduct = createSlice({
  name: "GET_PRODUCT",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
      // state.pageTotalCount = Math.ceil(
      //   action.payload.headers["x-total-count"] / 3
      // );
    },
  },
});
const GetOneProduct = createSlice({
  name: "GET_ONE_PRODUCT",
  initialState,
  reducers: {
    setOneProduct(state, action) {
      state.productDetails = action.payload;
    },
  },
});

export const Product = GetProduct.reducer;
export const ProductOne = GetOneProduct.reducer;

export const { setProduct } = GetProduct.actions;
export const { setOneProduct } = GetOneProduct.actions;
