import api from "../../api";

export function fetchProductCategories() {
  return (dispatch, getState) => {
    api("/categories").then(data => {
      // note: just `dispatch` here now
      dispatch(categoriesFetched(data));
    });
  };
}

export function categoriesFetched(data) {
  return {
    type: "categories/FETCHED",
    payload: data
  };
}
