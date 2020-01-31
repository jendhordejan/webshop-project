import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import CartProduct from "./CartProduct";

class ShoppingCart extends Component {
  displayCartProducts = cartCollection => {
    console.log("shopping cart component", cartCollection);
    // debugger;
    return cartCollection.map(cartItem => <CartProduct product={cartItem} />);
  };

  render() {
    return (
      <div className="cart-list-container">
        <div>
          <NavBar totalCartCount={this.props.cart.length} />
          <table>
            <thead>
              <tr>
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
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.shoppingCart
  };
}

export default connect(mapStateToProps)(ShoppingCart);
