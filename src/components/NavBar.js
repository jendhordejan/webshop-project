import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

export default class NavBar extends Component {
  render() {
    const { totalCartCount } = this.props;
    console.log("NavBar Component: ", totalCartCount);
    return (
      <nav className="nav-wrapper">
        <div className="nav-cart-container">
          {totalCartCount > 0 ? (
            //
            <li>
              <a href="badges.html">
                <Link href="badges.html" to="/shoppingcart">
                  Carts: {totalCartCount}
                </Link>
              </a>
            </li>
          ) : (
            <li>
              <a href="badges.html">Cart: {totalCartCount}</a>
            </li>
          )}
        </div>
      </nav>
    );
  }
}

// <div class="nav-wrapper">
// {/* <a class="brand-logo">Logo</a> */}
// <a class="title">Shop-a-holics</a>
// {/* <i class="large material-icons">shopping_cart</i> */}
// <ul id="nav-mobile" class="right hide-on-med-and-down">
//   <li>
//     <a href="collapsible.html">
//       {/* <i class="large material-icons">shopping_cart</i> */}
//       <Link>cart</Link>:{totalCartCount}
//     </a>
//   </li>
// </ul>
// </div>
