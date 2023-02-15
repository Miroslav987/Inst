import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as todoActions from "../../store/slices/Actions/todoActions";
export { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(todoActions, dispatch);
};
