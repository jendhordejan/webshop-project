// src/store/reducer.js
import { combineReducers } from "redux";
import products from "./products/reducer";
import categories from "./categories/reducer";
import shoppingCart from "./shoppingCart/reducer";

export default combineReducers({
  products,
  categories,
  shoppingCart
});
