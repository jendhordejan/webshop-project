import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartProduct } from "../store/shoppingCart/actions";

class Product extends Component {
  handleAddToCart = () => {
    this.props.dispatch(
      addToCartProduct(this.props.prodItem.id, this.props.prodItem.name, 1)
    );
  };

  render() {
    const { prodItem } = this.props;
    return (
      <div clasName="product-card" id={prodItem.id}>
        <div clasName="product-card-img">
          <img src={prodItem.imageUrl} alt={prodItem.id} />
        </div>
        <div className="product-card-detail">
          <p>{prodItem.name}</p>
          <p>€ {prodItem.price}</p>
          <div className="product-card-actions">
            <button onClick={this.handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("Products.js redux state?", reduxState);
  return {
    cart: reduxState.shoppingCart
  };
}

export default connect(mapStateToProps)(Product);
