import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { countItemsInCart } from "../store/shoppingCart/actions";

class NavigationBar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <a href={"sign-up"}>
                {/* add link to signup page here and change the <div>*/}
                <div display="flex">
                  {/* <img
                    src="https://dmuu196ds061u.cloudfront.net/public/static/media/account.6bbd7220.svg"
                    alt=""
                    role="presentation"
                    font-size="0"
                    class="css-elsu7l"
                  /> */}
                </div>
                Sign up
              </a>
            </li>
            <li>
              <a href={"cart"}>
                <Link to="/shoppingcart">
                  <img
                    src="https://dmuu196ds061u.cloudfront.net/public/static/media/cart.e937f7a7.svg"
                    alt=""
                    role="presentation"
                    font-size="0"
                    class="css-elsu7l"
                  />
                  <span>{countItemsInCart(this.props.cart)}</span>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.shoppingCart
  };
}

export default connect(mapStateToProps)(NavigationBar);
