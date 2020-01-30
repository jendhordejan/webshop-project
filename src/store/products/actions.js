import api from "../../api";

export function fetchProducts() {
  return (dispatch, getState) => {
    api("/products").then(data => {
      console.log("fetchProducts was here");
      // note: just `dispatch` here now
      dispatch(productsFetched(data));
      console.log("fetchProducts.data: ", data);
    });
  };
}

export function productsFetched(data) {
  console.log("productsFetched was here!");
  return {
    type: "products/FETCHED",
    payload: data
  };
}
