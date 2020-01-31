import React, { Component } from "react";

export default class CartProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <tr key={product.id}>
        <td>
          <img
            src={product.imageUrl}
            alt={product.id}
            height="70rem"
            width="70rem"
          />
        </td>
        <td>{product.name}</td>
        <td>{product.qty}</td>
        <td>&euro; {product.qty * product.price}</td>
      </tr>
    );
  }
}
