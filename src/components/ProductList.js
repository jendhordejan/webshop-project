import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import Product from "./Product";
import Categories from "./Categories";

import { fetchProductCategories } from "../store/categories/actions";

class ProductList extends Component {
  componentDidMount() {
    // Do the data fetch...
    console.log("componentDidMount was here");
    this.props.dispatch(fetchProducts());
    this.props.dispatch(fetchProductCategories());
  }

  displayProducts = listOfProducts => {
    return listOfProducts.map(productItem => (
      <Product prodItem={productItem} />
    ));
  };

  displayCategories = listOfCategories => {
    return listOfCategories.map(categoryItem => (
      <Categories categories={categoryItem} />
    ));
  };

  render() {
    // console.log("check categories state: ", this.props.categories);
    if (!this.props.prods) {
      return "Loading...";
    }
    // const loading = !this.props.prods;
    return (
      <div>
        <h1>This Superficious Hypertencious Webshop</h1>
        {/* {this.props.prod_categories && (
          <div>{this.displayCategories(this.props.prod_categories)}</div>
        )} */}
        <div className="product-container">
          {this.displayProducts(this.props.prods)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
  return {
    prods: reduxState.products,
    prod_categories: reduxState.categories
  };
}

export default connect(mapStateToProps)(ProductList);
