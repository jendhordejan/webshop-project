import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Homepage from "./Homepage";
// import ProductList from "./ProductList";

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="/products">Product list Page</Link>
        </div>
        <div>
          <Link to="/shoppingcart">Shopping Cart</Link>
        </div>
      </div>
    );
  }
}
