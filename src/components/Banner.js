import React, { Component } from "react";
import "../css/banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div class="banner-container">
        <div class="usp-block">
          <span className="usp-block-item">
            Free delivery on orders over €180
          </span>
          <span className="usp-block-item">
            Fast &amp; climate compensated shipping
          </span>
          <span className="usp-block-item">Secure payments</span>
        </div>
      </div>
    );
  }
}
