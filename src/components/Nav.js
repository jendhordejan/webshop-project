import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div class="header-nav-link-wrapper">
        <a
          href="/cart"
          class="cart-icon"
          title="Cart (0 items)"
          data-ajax-cart-link=""
          data-toggle-element-class='{
          "class": "ajax-cart__is-open"
        }'
        >
          <i class="icon-wrapper icon-icon-cart" aria-hidden="true">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-cart"
              height="23"
              viewBox="0 0 20 23"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#121212"
                stroke-width="2"
                transform="translate(1 1)"
              >
                <path d="m1 7h16c.5522847 0 1 .44771525 1 1v9c0 2.209139-1.790861 4-4 4h-10c-2.209139 0-4-1.790861-4-4v-9c0-.55228475.44771525-1 1-1z"></path>
                <path
                  d="m4 10v-5.2c0-2.6509668 2.23857625-4.8 5-4.8 2.7614237 0 5 2.1490332 5 4.8v5.2"
                  stroke-linecap="round"
                ></path>
              </g>
            </svg>
          </i>

          <span class="cart-count hidden" data-ajax-cart-icon-wrapper="">
            <span data-ajax-cart-icon-quantity="0">0</span>
            <span class="visually-hidden">items</span>
          </span>
        </a>
      </div>
    );
  }
}
