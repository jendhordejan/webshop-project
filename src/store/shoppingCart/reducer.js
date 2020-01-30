// src/store/products/reducer.js
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/ADD": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
