import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { setOneProduct, setProduct } from "../todoSlice";
const API = "http://localhost:8000/products";
export const getProduct = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get(API);

  dispatch(setProduct(data));
};

export const readOneProduct = (id: any) => async (dispatch: Dispatch) => {
  const { data } = await axios(`${API}/${id}`);
  console.log(data);
  dispatch(setOneProduct(data));
};

export const addProduct = (newTodo: object) => async (dispatch: any) => {
  console.log(newTodo);
  await axios.post(API, newTodo);
  dispatch(getProduct());
};

export const deleteProduct = (id: any) => async (dispatch: any) => {
  await axios.delete(`${API}/${id}`);
  dispatch(getProduct());
};

export const editProduct =
  (id: any, ediObjd: object) => async (dispatch: any) => {
    await axios.patch(`${API}/${id}`, ediObjd);
    dispatch(getProduct());
  };
