import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Homepage from "./components/Homepage";
import ShoppingCart from "./components/ShoppingCart";

//---------
import NavigationBar from "./components/NavigationBar";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <body className="App-body">
        <NavigationBar />
        <Categories />
        <Switch>
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/" component={ProductList} />
          {/* <Route path="/" component={Homepage} /> */}
        </Switch>
      </body>
      {/* <NavBar />
      <ProductList /> */}
    </div>
  );
}

export default App;
