// src/store/products/reducer.js
const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "categories/FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
