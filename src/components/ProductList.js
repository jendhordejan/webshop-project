import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import Product from "./Product";

class ProductList extends Component {
  componentDidMount() {
    // Do the data fetch...
    console.log("componentDidMount was here");
    this.props.dispatch(fetchProducts());
  }

  displayProducts = listOfProducts => {
    // return console.log("displayProducts", listOfProducts);
    return listOfProducts.map(productItem => (
      <Product prodItem={productItem} />
    ));
  };

  render() {
    if (!this.props.prods) {
      return "Loading...";
    }
    // const loading = !this.props.prods;
    return (
      <div>
        <h1>This Superficious Hypertencious Webshop</h1>
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
    prods: reduxState.products
  };
}

export default connect(mapStateToProps)(ProductList);
