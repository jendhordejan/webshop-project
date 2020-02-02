export function addToCartProduct(product) {
  //(1.1)
  const action = {
    type: "cart/ADDPRODUCT",
    payload: { ...product, qty: 1 }
  };
  return action;
}

export function addQtyProduct(prodId) {
  console.log("item found in Cart");
  const action = {
    type: "cart/ADDQTY",
    payload: prodId
  };
  return action;
}

export function totalShoppingCartPrice(cartState) {
  return cartState
    ? cartState.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.qty,
        0
      )
    : 0;
}

export function countItemsInCart(cartState) {
  if (cartState.length > 0) {
    return cartState.reduce(
      (accumulator, cartItem) => accumulator + cartItem.qty,
      0
    );
  } else {
    return 0;
  }
}
