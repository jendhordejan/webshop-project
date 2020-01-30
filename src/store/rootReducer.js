// src/store/reducer.js
import { combineReducers } from "redux";
import products from "./products/reducer";

export default combineReducers({
  products
});
