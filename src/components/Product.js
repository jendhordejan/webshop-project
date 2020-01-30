import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { prodItem } = this.props;
    return (
      <div clasName="product-card" id={prodItem.id}>
        <div clasName="product-card-img">
          <img src={prodItem.imageUrl} alt={prodItem.id} />
        </div>
        <div className="producr-card-detail">
          <p>{prodItem.name}</p>
          <p>€ {prodItem.price}</p>
        </div>
      </div>
    );
  }
}
