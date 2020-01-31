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
