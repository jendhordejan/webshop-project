import api from "../../api";

export function fetchProducts() {
  return (dispatch, getState) => {
    api("/products").then(data => {
      // note: just `dispatch` here now
      dispatch(productsFetched(data));
    });
  };
}

export function productsFetched(data) {
  return {
    type: "products/FETCHED",
    payload: data
  };
}
