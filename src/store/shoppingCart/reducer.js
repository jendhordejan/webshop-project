// src/store/products/reducer.js

export default function reducer(state, action) {
  if (!state) {
    state = [];
  }
  // debugger;
  switch (action.type) {
    case "cart/ADDPRODUCT": {
      return [...state, action.payload];
    }
    case "cart/ADDQTY": {
      const copyState = [...state];
      copyState.map(product =>
        product.id === action.payload
          ? [...copyState, (product.qty += 1)]
          : state
      );
    }
    default: {
      return state;
    }
  }
}
