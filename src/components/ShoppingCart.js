import React, { Component } from "react";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import "../css/shoppingcart.css";
import { totalShoppingCartPrice } from "../store/shoppingCart/actions";

class ShoppingCart extends Component {
  displayCartProducts = cartCollection => {
    return cartCollection.map(cartItem => <CartProduct product={cartItem} />);
  };

  render() {
    return (
      <div class="cart-wrapper">
        <div class="cart-header-wrapper">
          <h3 class="cart-header">Shopping Cart</h3>
        </div>
        <div class="cart-products-wrapper" data-cart-container="products">
          <div>
            <table>
              <thead>
                <tr className="cart-products-wrapper-header">
                  <th></th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Total price</th>
                </tr>
              </thead>
              <tbody>{this.displayCartProducts(this.props.cart)}</tbody>
            </table>
          </div>
        </div>
        <div class="cart-totals-wrapper" data-cart-container="totals">
          <p class="price-discounts hidden">
            You're saving <space> </space>
            <span class="price-total" data-cart-template-element="discounts">
              € 0
            </span>
          </p>
          <p class="price-heading">
            Subtotal<space> </space>
            <span class="price-total" data-cart-template-element="total">
              €{totalShoppingCartPrice(this.props.cart)}
            </span>
          </p>
        </div>
        <div class="cart-actions-wrapper" data-cart-container="actions">
          {/* <button type="submit" class="button">
            View cart
          </button> */}
          <a href="/checkout" class="button button__funnel">
            Check Out
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.shoppingCart
  };
}

export default connect(mapStateToProps)(ShoppingCart);
