import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartProduct } from "../store/shoppingCart/actions";
import { addQtyProduct } from "../store/shoppingCart/actions";
import "../css/product.css";

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
      // <div class="row">
      // <div class="col">
      <div class="card">
        <div class="card-image">
          <img
            class="card-image-img"
            src={prodItem.imageUrl}
            alt={prodItem.id}
          />
          <span class="card-title">{prodItem.id}</span>
        </div>
        <div class="card-content">
          <p>{prodItem.name}</p>
          <br></br>
          <p class="product-price">€ {prodItem.price}</p>
        </div>
        <div class="card-action">
          <button
            className="waves-effect waves-light btn-small"
            onClick={() => this.handleAddToCart(this.props.cart, prodItem.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      // </div>
      // </div>
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
