import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductCategories } from "../store/categories/actions";

class Categories extends Component {
  componentDidMount() {
    // Do the data fetch...
    this.props.dispatch(fetchProductCategories());
  }

  displayCategories = listOfCategories => {
    console.log("listOfCategories", listOfCategories);
    return (
      listOfCategories &&
      listOfCategories.map(categoryItem => (
        <li>
          <a href="badges.html">{categoryItem.name}</a>
        </li>
      ))
    );
  };

  render() {
    // const { categories } = this.props;
    return (
      <nav>
        <div class="nav-wrapper">
          <ul class="right hide-on-med-and-down">
            {this.displayCategories(this.props.prod_categories)}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    prod_categories: reduxState.categories
  };
}

export default connect(mapStateToProps)(Categories);
