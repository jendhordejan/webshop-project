import React, { Component } from "react";

export default class Product extends Component {
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
