import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartProduct } from "../store/shoppingCart/actions";
import { addQtyProduct } from "../store/shoppingCart/actions";

class Product extends Component {
  handleAddToCart = (cartState, prodId) => {
    console.log("handleAddToCart.cartState: ", cartState);
    console.log("handleAddToCart.prodId:", prodId);

    cartState.length > 0
      ? cartState.find(cartItem => cartItem.id === prodId)
        ? this.props.dispatch(addQtyProduct(prodId))
        : this.props.dispatch(addToCartProduct(this.props.prodItem))
      : this.props.dispatch(addToCartProduct(this.props.prodItem));
  };

  render() {
    const { prodItem } = this.props;
    return (
      <div className="card" id={prodItem.id}>
        <div clasName="card-image">
          <img
            src={prodItem.imageUrl}
            alt={prodItem.id}
            height="200rem"
            width="200rem"
          />
        </div>{" "}
        <div className="product-card-detail">
          <p>{prodItem.name}</p>
          <p>
            {Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR"
            }).format(prodItem.price)}
          </p>
          <div className="product-card-actions">
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => this.handleAddToCart(this.props.cart, prodItem.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("Products.js redux state?", reduxState);
  return {
    cart: reduxState.shoppingCart
  };
}

export default connect(mapStateToProps)(Product);
