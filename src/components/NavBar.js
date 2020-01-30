import React, { Component } from "react";
// import { connect } from "react-redux";

export default class NavBar extends Component {
  render() {
    const { totalCartCount } = this.props;
    console.log("NavBar Component: ", totalCartCount);
    return (
      <div>
        <h3>Cart: {totalCartCount}</h3>
      </div>
    );
  }
}
// function mapStateToProps(reduxState) {
//   console.log("NavBar Redux State", reduxState);
//   return {
//     cart: reduxState.shoppingCart
//   };
// }

// export default connect(mapStateToProps)(NavBar);
