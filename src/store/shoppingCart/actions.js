export function addToCartProduct(prod_id, prod_name, prod_qty) {
  //(1.1)
  const action = {
    type: "cart/ADDPRODUCT",
    payload: {
      prod_id: prod_id,
      prod_name: prod_name,
      prod_qty: prod_qty
    }
  };
  return action;
}
