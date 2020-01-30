import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return <div>{categories.name}</div>;
  }
}
