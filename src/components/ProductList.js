import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import Product from "./Product";
import Categories from "./Categories";

import { fetchProductCategories } from "../store/categories/actions";
import "../css/productlist.css";

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
    const allProducts = this.props.prods;
    const categoryId = parseInt(this.props.match.params.catId, 10);
    const filteredProducts = categoryId
      ? allProducts.filter(product => product.categoryId === categoryId)
      : allProducts;

    if (!this.props.prods) {
      return "Loading...";
    }
    // const loading = !this.props.prods;
    return (
      <div className="product-list">
        <p align="center">We have {this.props.prods.length} products</p>
        <div className="product-list-container">
          {this.displayProducts(filteredProducts)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
  return {
    prods: reduxState.products,
    prod_categories: reduxState.categories,
    cart: reduxState.shoppingCart
  };
}

export default connect(mapStateToProps)(ProductList);
