// src/store/products/reducer.js

export default function reducer(state, action) {
  if (!state) {
    state = [];
  }
  // debugger;
  switch (action.type) {
    case "cart/ADDPRODUCT": {
      const result = {
        prod_id: action.payload.prod_id,
        prod_name: action.payload.prod_name,
        prod_qty: action.payload.prod_qty
      };
      return [...state, result];
    }
    default: {
      return state;
    }
  }
}
