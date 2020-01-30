import api from "../../api";

export function fetchProducts() {
  //(1.1)
  return (dispatch, getState) => {
    api("/products").then(data => {
      // note: just `dispatch` here now
      dispatch(productsFetched(data));
    });
  };
}

export function productsFetched(data) {
  //(1.2)
  return {
    type: "products/FETCHED",
    payload: data
  };
}
