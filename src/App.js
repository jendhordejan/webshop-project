import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Toolbar from "./components/Toolbar";
import Homepage from "./components/Homepage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <body className="App-body">
        <Toolbar />
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/" component={Homepage} />
        </Switch>
      </body>
      {/* <NavBar />
      <ProductList /> */}
    </div>
  );
}

export default App;
